
import React, { useEffect, useState } from 'react';
import API from '../api';
export default function Admin(){ const [stats,setStats]=useState(null);
  useEffect(()=>{ API.get('/admin/stats').then(r=>setStats(r.data)).catch(()=>{}); },[]);
  return (<div className="container"><h1>Admin Dashboard</h1>{stats ? <div><p>Users: {stats.users}</p><p>Products: {stats.products}</p><p>Orders: {stats.orders}</p></div> : <p>Loading or unauthorized</p>}</div>)
}
