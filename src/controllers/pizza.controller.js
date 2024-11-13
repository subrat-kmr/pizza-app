const { getAllPizzasService, getPizzaByIdService } = require('../services/pizza.service');

exports.getAllPizzas = async (req, res) => {
  const pizzas = await getAllPizzasService();
  res.status(200).json(pizzas);
};

exports.getPizzaById = async (req, res) => {
  const pizzaId = req.params.id;
  const pizza = await getPizzaByIdService(pizzaId);
  if (!pizza) {
    res.status(404).json({ error: 'Pizza not found' });
  } else {
    res.status(200).json(pizza);
  }
};
