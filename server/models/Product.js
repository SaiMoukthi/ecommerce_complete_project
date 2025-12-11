
const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
  title: String, description: String, price: Number, images: [String], category: String,
  stock: { type: Number, default: 0 }, rating: { type: Number, default: 0 }
}, { timestamps: true });
module.exports = mongoose.model('Product', productSchema);
