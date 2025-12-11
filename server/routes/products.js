
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

// Public: list products
router.get('/', async (req, res) => {
  const products = await Product.find().limit(100);
  res.json(products);
});
// Get product
router.get('/:id', async (req, res) => {
  const p = await Product.findById(req.params.id); if(!p) return res.status(404).json({ message: 'Not found' }); res.json(p);
});
// Admin CRUD
router.post('/', auth, admin, async (req, res) => { const prod = new Product(req.body); await prod.save(); res.status(201).json(prod); });
router.put('/:id', auth, admin, async (req, res) => { const prod = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true }); res.json(prod); });
router.delete('/:id', auth, admin, async (req, res) => { await Product.findByIdAndDelete(req.params.id); res.json({ message: 'Deleted' }); });
module.exports = router;
