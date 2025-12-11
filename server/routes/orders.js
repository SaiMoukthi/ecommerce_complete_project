
const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const auth = require('../middleware/auth');

router.post('/', auth, async (req, res) => {
  try {
    const { items, total } = req.body; if(!items || !total) return res.status(400).json({ message: 'Invalid order' });
    const order = new Order({ user: req.user.id, items, total }); await order.save(); res.status(201).json(order);
  } catch (err) { console.error(err); res.status(500).json({ message: 'Server error' }); }
});

router.get('/', auth, async (req, res) => {
  const orders = await Order.find({ user: req.user.id }).populate('items.product'); res.json(orders);
});

module.exports = router;
