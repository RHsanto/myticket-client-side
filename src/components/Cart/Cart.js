import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './Cart.css'

const Cart = () => {
  const{user}=useAuth();
  const[orders,setOrders]=useState([]);

  useEffect(()=>{
    fetch(`https://rocky-river-97621.herokuapp.com/all-Orders/${user.email}`)
    .then(res=>res.json())
    .then(data=>setOrders(data))
  },[user.email])

  // here orders delete
  const handleDelete = id =>{
   
    const proceed = window.confirm('Are you sure , you want to delete ?');

    if(proceed){
      const url =`https://rocky-river-97621.herokuapp.com/all-Orders/${id}`
      fetch(url,{
          method: 'DELETE'
  
      })
          .then(res => res.json())
          .then(data =>{
              if(data){
               alert('Deleted successfully')
               const remaining = orders.filter(order => order._id !== id)
                 setOrders(remaining)
                 window.location.reload()
              }
          })
  }
    
  }

  return (
    <div className='order-section  '>
    <h1 className='title'>My Orders</h1>
   
    <h3 className='p-5' ><span className='text-primary'>{user.displayName} </span>Here your order summary</h3>
    
    {/* here all orders */}
  {
  orders.map(order=><div key={order._id}>
  <div className="container ">
  
    <div className="row g-4">
      <div className="col-lg-6 mx-auto">
      <div className="card mb-3">
       <div className="row g-0">
       <div className="col-md-5">

        <img  src={order.orderImg} className="img-fluid h-100 rounded-start" alt="..."/>
       </div>
      <div className="col-md-7">
       <div className="card-body text-start">
      <h4 className="card-title">{order.orderName}</h4>
      <h6 className="card-text"><strong>Venue</strong> : {order.orderVenue}</h6>
      <h6 className="card-text"><strong>Price</strong> : ${order.price}</h6>
      <h6 className="card-text"><strong>Address</strong>: {order.address}</h6>
      <div onClick={()=>handleDelete(order._id)} className="btn btn-danger">
           <i className="fas fa-trash-alt text-light me-2"></i> Cancel</div>
          </div>
             </div>
                </div>
            </div>
       </div>
    </div>
  </div>
</div>)
  }
   
  </div>
  );
};

export default Cart;