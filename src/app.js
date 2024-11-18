const express = require('express');
const { PrismaClient } = require('@prisma/client');
const authRoutes = require('./routes/auth.route');
const pizzaRoutes = require('./routes/pizza.route');
const orderRoutes = require('./routes/order.route');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const prisma = new PrismaClient();

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/user', authRoutes);
app.use('/api/pizzas', pizzaRoutes);
app.use('/api/orders', orderRoutes);

const port = process.env.PORT || 4001;
app.listen(port, () => {
  console.log(`Pizza app listening on port ${port}`);
});