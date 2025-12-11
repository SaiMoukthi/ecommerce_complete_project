
import React, { useEffect, useState } from 'react';
import API from '../api';
import { Link } from 'react-router-dom';
export default function Home(){
  const [products, setProducts] = useState([]);
  useEffect(()=>{ API.get('/products').then(r=>setProducts(r.data)).catch(()=>{}); },[]);
  return (<div className="container"><h1>Products</h1>{products.map(p=>(
    <div key={p._id} className="card"><h3>{p.title}</h3><p>{p.description}</p><p>₹{p.price}</p><Link to={'/product/'+p._id}>View</Link></div>
  ))}</div>)
}
