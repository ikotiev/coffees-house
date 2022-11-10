const { Router } = require('express');
const { coffeesController } = require('../controllers/coffees.controller');

const router = Router();

router.get('/drinks', coffeesController.getCoffees);
router.get('/drinks/in-stock', coffeesController.getStock);
router.get('/drinks/:id', coffeesController.getCoffeesById);
router.post('/drinks', coffeesController.addCoffees);
router.delete('/drinks/:id', coffeesController.removeCoffees);
router.patch('/drinks/:id', coffeesController.updateCoffees);

module.exports = router;
