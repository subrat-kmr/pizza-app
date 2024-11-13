const { createOrderService, getOrderByIdService, getOrdersByUserIdService,getAllOrders } = require('../services/order.service');

exports.createOrder = async (req, res) => {
  const { userId, pizzaItems, deliveryAddress } = req.body;
  try {
    const order = await createOrderService(userId, pizzaItems, deliveryAddress);
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create order' });
  }
};

exports.getOrderById = async (req, res) => {
  const orderId = req.params.id;
  const order = await getOrderByIdService(orderId);
  if (!order) {
    res.status(404).json({ error: 'Order not found' });
  } else {
    res.status(200).json(order);
  }
};

exports.getOrdersByUserId = async (req, res) => {
  const userId = req.params.userId;
  const orders = await getOrdersByUserIdService(userId);
  res.status(200).json(orders);
};

exports.getAllOrders = async (req,res) => {
  const allOrders = await getAllOrders()
  res.status(200).json(allOrders)
}
