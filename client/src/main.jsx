
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Auth from './pages/Auth';
import Admin from './pages/Admin';
import './styles.css';

function App(){ return (
  <BrowserRouter>
    <nav className="nav">
      <Link to="/">Home</Link> | <Link to="/cart">Cart</Link> | <Link to="/auth">Auth</Link> | <Link to="/admin">Admin</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/product/:id" element={<Product/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/auth" element={<Auth/>} />
      <Route path="/admin" element={<Admin/>} />
    </Routes>
  </BrowserRouter>
)} createRoot(document.getElementById('root')).render(<App/>);
