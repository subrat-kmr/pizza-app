const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');  // Import bcrypt
const prisma = new PrismaClient();

async function main() {
  // Static Users
  const user1 = await prisma.user.create({
    data: {
      username: 'JohnDoe',
      email: 'johndoe@example.com',
      password: await bcrypt.hash('password123', 10),  // Hashing the password for security
      address: '123 Main St, New York, NY',
    },
  });

  const user2 = await prisma.user.create({
    data: {
      username: 'JaneDoe',
      email: 'janedoe@example.com',
      password: await bcrypt.hash('password456', 10),  // Hashing the password for security
      address: '456 Elm St, Los Angeles, CA',
    },
  });

  // Static Pizzas
  const pizzaData = [
    {
      name: 'Margherita',
      description: 'Classic cheese and tomato pizza',
      price: 8.99,
      imageUrl: 'https://picsum.photos/200/300?random=1',
      size: 'medium',
    },
    {
      name: 'Pepperoni',
      description: 'Pepperoni and cheese pizza',
      price: 10.99,
      imageUrl: 'https://picsum.photos/200/300?random=2',
      size: 'large',
    },
    {
      name: 'Vegetarian',
      description: 'Pizza loaded with veggies',
      price: 9.99,
      imageUrl: 'https://picsum.photos/200/300?random=3',
      size: 'small',
    },
    {
      name: 'Hawaiian',
      description: 'Ham and pineapple pizza',
      price: 11.99,
      imageUrl: 'https://picsum.photos/200/300?random=4',
      size: 'medium',
    },
    {
      name: 'Meat Lover\'s',
      description: 'Pizza loaded with meats',
      price: 14.99,
      imageUrl: 'https://picsum.photos/200/300?random=5',
      size: 'large',
    },
    {
      name: 'Four Cheese',
      description: 'Pizza with four types of cheese',
      price: 10.99,
      imageUrl: 'https://picsum.photos/200/300?random=6',
      size: 'small',
    },
    {
      name: 'BBQ Chicken',
      description: 'BBQ chicken and red onion pizza',
      price: 12.99,
      imageUrl: 'https://picsum.photos/200/300?random=7',
      size: 'medium',
    },
    {
      name: 'Shrimp Scampi',
      description: 'Shrimp and garlic pizza',
      price: 13.99,
      imageUrl: 'https://picsum.photos/200/300?random=8',
      size: 'large',
    },
    {
      name: 'Mediterranean',
      description: 'Pizza with feta, olives, and artichokes',
      price: 11.99,
      imageUrl: 'https://picsum.photos/200/300?random=9',
      size: 'small',
    },
    {
      name: 'Spicy Italian',
      description: 'Spicy Italian sausage and pepper pizza',
      price: 12.99,
      imageUrl: 'https://picsum.photos/200/300?random=10',
      size: 'medium',
    },
    {
      name: 'Greek',
      description: 'Pizza with feta, olives, and sun-dried tomatoes',
      price: 11.99,
      imageUrl: 'https://picsum.photos/200/300?random=11',
      size: 'large',
    },
    {
      name: 'Chicken Bacon Ranch',
      description: 'Chicken, bacon, and ranch pizza',
      price: 13.99,
      imageUrl: 'https://picsum.photos/200/300?random=12',
      size: 'small',
    },
    {
      name: 'Veggie Delight',
      description: 'Pizza loaded with veggies',
      price: 9.99,
      imageUrl: 'https://picsum.photos/200/300?random=13',
      size: 'medium',
    },
    {
      name: 'Meatball',
      description: 'Meatball and marinara pizza',
      price: 12.99,
      imageUrl: 'https://picsum.photos/200/300?random=14',
      size: 'large',
    },
    {
      name: 'Pesto Chicken',
      description: 'Pesto chicken and mozzarella pizza',
      price: 13.99,
      imageUrl: 'https://picsum.photos/200/300?random=15',
      size: 'small',
    },
    {
      name: 'Sausage and Pepper',
      description: 'Sausage and pepper pizza',
      price: 11.99,
      imageUrl: 'https://picsum.photos/200/300?random=16',
      size: 'medium',
    },
    {
      name: 'Mushroom and Truffle',
      description: 'Mushroom and truffle pizza',
      price: 14.99,
      imageUrl: 'https://picsum.photos/200/300?random=17',
      size: 'large',
    },
    {
      name: 'Artichoke and Spinach',
      description: 'Artichoke and spinach pizza',
      price: 11.99,
      imageUrl: 'https://picsum.photos/200/300?random=18',
      size: 'small',
    },
    {
      name: 'Capricciosa',
      description: 'Ham, mushroom, and artichoke pizza',
      price: 13.99,
      imageUrl: 'https://picsum.photos/200/300?random=19',
      size: 'medium',
    },
    {
      name: 'Quattro Formaggi',
      description: 'Four types of cheese pizza',
      price: 12.99,
      imageUrl: 'https://picsum.photos/200/300?random=20',
      size: 'large',
    },
  ];

await prisma.pizza.createMany({
    data: pizzaData,
  });


  // Static Orders (for user1)
  await prisma.order.create({
    data: {
      userId: user1.id,
      pizzaItems: JSON.stringify([{ pizzaId: pizza1.id, quantity: 2 }, { pizzaId: pizza2.id, quantity: 1 }]),
      totalPrice: 28.97,
      deliveryAddress: '123 Main St, New York, NY',
      status: 'pending',
    },
  });

  await prisma.order.create({
    data: {
      userId: user2.id,
      pizzaItems: JSON.stringify([{ pizzaId: pizza3.id, quantity: 1 }]),
      totalPrice: 9.99,
      deliveryAddress: '456 Elm St, Los Angeles, CA',
      status: 'delivered',
    },
  });

  console.log('Static data inserted');
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
