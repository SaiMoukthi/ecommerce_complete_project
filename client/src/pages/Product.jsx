
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import API from '../api';
export default function Product(){ const { id } = useParams(); const [product,setProduct]=useState(null); const nav=useNavigate();
  useEffect(()=>{ API.get('/products/'+id).then(r=>setProduct(r.data)).catch(()=>{}); },[id]);
  const addToCart=()=>{ const cart=JSON.parse(localStorage.getItem('cart')||'[]'); cart.push({ id:product._id, title:product.title, price:product.price, qty:1 }); localStorage.setItem('cart', JSON.stringify(cart)); nav('/cart'); };
  if(!product) return <div className="container">Loading...</div>;
  return (<div className="container"><h2>{product.title}</h2><p>{product.description}</p><p>₹{product.price}</p><button onClick={addToCart}>Add to cart</button></div>)
}
