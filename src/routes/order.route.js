const express = require('express');
const { createOrder, getOrderById, getOrdersByUserId,getAllOrders } = require('../controllers/order.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

router.get('/allOrders', getAllOrders);
router.post('/', createOrder);
// router.get('/:id', authMiddleware, getOrderById);
router.get('/:id', getOrderById);
router.get('/user/:userId', getOrdersByUserId);

module.exports = router;
