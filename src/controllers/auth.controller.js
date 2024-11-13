const { registerUser, loginUser,allUsers } = require('../services/auth.service');

exports.register = async (req, res) => {
  const { username, email, password, address } = req.body;
  try {
    const user = await registerUser(username, email, password, address);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const token = await loginUser(email, password);
    res.status(200).json(token);
  } catch (error) {
    res.status(401).json({ error: 'Invalid credentials' });
  }
};

exports.getAllUsers = async (req,res) => {
  const users = await allUsers();
    console.log(users)
    res.status(200).json({ users });
}
