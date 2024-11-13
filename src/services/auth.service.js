const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

exports.registerUser = async (username, email, password, address) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return await prisma.user.create({
    data: {
      username,
      email,
      password: hashedPassword,
      address
    }
  });
};

exports.loginUser = async (email, password) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error('Invalid credentials');
  }
  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  return { id:user.id ,username: user.username, email: user.email, token: 'Bearer ' + token };
};

exports.allUsers = async () => {
  const allUsers = await prisma.user.findMany() || []
  return allUsers
}
