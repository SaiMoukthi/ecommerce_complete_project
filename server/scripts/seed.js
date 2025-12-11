
const mongoose = require('mongoose');
const User = require('../models/User');
const Product = require('../models/Product');
const bcrypt = require('bcryptjs');

const MONGO = process.env.MONGO_URI || 'mongodb://mongo:27017/ecommerce';
mongoose.connect(MONGO).then(async () => {
  console.log('Connected. Seeding...');
  await User.deleteMany({});
  await Product.deleteMany({});
  const adminPass = process.env.ADMIN_PASS || 'admin123';
  const hash = await bcrypt.hash(adminPass, 10);
  const admin = new User({ name: 'Admin', email: 'admin@example.com', password: hash, role: 'admin' });
  await admin.save();
  await Product.insertMany([
    { title: 'Red T-Shirt', description: 'Comfortable cotton tee', price: 19.99, category: 'clothing', stock: 25, images: [] },
    { title: 'Coffee Mug', description: 'Ceramic mug 350ml', price: 9.99, category: 'home', stock: 100, images: [] }
  ]);
  console.log('Seeded. Admin user: admin@example.com with password:', adminPass);
  process.exit(0);
}).catch(err => { console.error(err); process.exit(1); });
