// models/Stock.js

const mongoose = require('mongoose');

const StockSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

module.exports = mongoose.model('Stock', StockSchema);
