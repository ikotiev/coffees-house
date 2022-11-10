const mongoose = require('mongoose');

const CoffeeSchema = mongoose.Schema({
  name: String,
  price: Number,
  availability: String,
  isCaffeine: String,
  volume: Number,
  description: String
});

const Coffee = mongoose.model('Coffee', CoffeeSchema);

module.exports = Coffee;
