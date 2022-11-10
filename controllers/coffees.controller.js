const Coffee = require('../models/Coffee.model');

module.exports.coffeesController = {
  getCoffees: function (req, res) {
    Coffee.find({}, { price: 1, name: 1, _id: 1 }).then((a) => {
      res.json(a)
  }).catch({ "error": "Ошибка при добавлении нового напитка" })},
  getStock: (req, res) => {
    Coffee.find({}, {availability: 'true'}).then((a) => {
        res.json(a)
    }).catch({ "error": "Ошибка при добавлении нового напитка" })},
  addCoffees: function (req, res) {
    Coffee.create({
      name: req.body.name,
      price: req.body.price,
      availability: req.body.availability,
      isCaffeine: req.body.isCaffeine,
      volume: req.body.volume,
      description: req.body.description
    }).then((cof) => {
      res.json(cof);
    }).catch({ "error": "Ошибка при добавлении нового напитка" });
  },
  getCoffeesById: function (req, res) {
    Coffee.findById(req.params.Id).then((coffee) => {
      res.json(coffee);
    });
  },
  removeCoffees: function (req, res) {
    Coffee.findByIdAndRemove(req.params.CoffeeId).then(() => {
      res.json('deleted');
    });
  },
  updateCoffees: function (req, res) {
    Coffee.findByIdAndUpdate(
      req.params.coffeesId,
      {
      name: req.body.name,
      price: req.body.price,
      availability: req.body.availability,
      isCaffeine: req.body.isCaffeine,
      volume: req.body.volume,
      description: req.body.description
      },
      { new: true },
    ).then((coffee) => {
      res.json(coffee);
    });
  },
};
