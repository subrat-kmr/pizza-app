const express = require('express');
const { getAllPizzas, getPizzaById } = require('../controllers/pizza.controller');

const router = express.Router();

router.get('/', getAllPizzas);
router.get('/:id', getPizzaById);

module.exports = router;
