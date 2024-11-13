const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

exports.getAllPizzasService = async () => {
  return await prisma.pizza.findMany();
};

exports.getPizzaByIdService = async (id) => {
  return await prisma.pizza.findUnique({ where: { id } });
};
