
import React, { useEffect, useState } from 'react';
import API from '../api';
export default function Cart(){ const [cart,setCart]=useState([]);
  useEffect(()=> setCart(JSON.parse(localStorage.getItem('cart')||'[]')), []);
  const checkout = async ()=>{ const token=localStorage.getItem('token'); if(!token) return alert('Please login'); const total = cart.reduce((s,i)=>s+i.price*i.qty,0); const items = cart.map(i=>({ product: i.id, qty: i.qty, price: i.price })); try{ const res=await API.post('/orders',{ items, total }); alert('Order placed: '+res.data._id); localStorage.removeItem('cart'); setCart([]); }catch(e){ alert('Order failed'); } };
  return (<div className="container"><h1>Cart</h1>{cart.length===0? <p>Empty</p>:<div><ul>{cart.map((i,idx)=><li key={idx}>{i.title} x {i.qty} — ₹{i.price}</li>)}</ul><p>Total: ₹{cart.reduce((s,i)=>s+i.price*i.qty,0)}</p><button onClick={checkout}>Checkout</button></div>}</div>)
}
