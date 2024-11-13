const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

exports.createOrderService = async (userId, pizzaItems, deliveryAddress) => {
  const pizaPrices = await prisma.pizza.findMany({
    where: {
      id: { in: pizzaItems.map((item)=> item.pizzaId) },
    },
    select:{
      id:true,
      price:true,
      name:true
    }
  });
  pizzaItems.forEach((item,index)=> {
    if (item.pizzaId === pizaPrices.filter(it => {return it.id === item.pizzaId})[0]?.id){
      item.pizzaName = pizaPrices.filter(it => {return it.id === item.pizzaId})[0]?.name
      item.price  = pizaPrices.filter(it => {return it.id === item.pizzaId})[0]?.price
    }
  })
  const totalPrice = pizzaItems.reduce((total, item) => total + item.price, 0);
  return await prisma.order.create({
    data: {
      userId,
      pizzaItems,
      totalPrice,
      deliveryAddress,
      status: 'pending'
    }
  });
};

exports.getOrderByIdService = async (id) => {
  return await prisma.order.findMany({ 
    where: { userId:id },
    include:{
      user:{
        select: {
        id:true,
          username:true,
          email:true
      }}
    }
   });
};

exports.getOrdersByUserIdService = async (userId) => {
  return await prisma.order.findMany({ where: { userId } });
};

exports.getAllOrders = async () => {
  let allOrders = await prisma.order.findMany({
    select: {
      id: true,
      user: {
        select: {
          id: true,
          username: true,
          email: true
        }
      },
      totalPrice: true,
      pizzaItems: true,
      status: true,
      deliveryAddress: true
    }
  })

  for (const order of allOrders) {
    for (const pizzaItem of order.pizzaItems) {
      pizzaItem.pizza = await prisma.pizza.findUnique({ where: { id: pizzaItem.pizzaId },select:{name:true,imageUrl:true} })
    }
  }

  return allOrders
}
