import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth'
import './Ticket.css'
import axios from 'axios';
const Ticket = () => {
  const{user}=useAuth();
  const {ticketId}=useParams();
  const[details,setDetails]=useState([]);

  useEffect(()=>{
    fetch(`https://polar-garden-80118.herokuapp.com/booking/${ticketId}`)
    .then(res=>res.json())
    .then(data=>setDetails(data))
  },[])

 
 
  const { register, handleSubmit,reset} = useForm();
  const onSubmit = data =>{
    data.email=user.email
    data.orderName=details.name
    data.price=details.Price
    console.log(data)
  
    axios.post('https://polar-garden-80118.herokuapp.com/addOrders',data)
    .then(res =>{
      if(res.data.insertedId){
        alert('Order Successful');
        reset();
      }
    })
  };
  
  
 // here order details

  return (
    <div>
      <div className="container">
        <div className="row my-5">
        <div className="col-lg-6">
          <img className='img-fluid' src={details.img} alt="" />
        </div>
        <div className="col-lg-6">
        <div className="booking-from text-start">
          <h2>{details.name}</h2>
          <h2 className='my-3'>Price: <span className='text-warning'>${details.Price}</span> </h2>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type='email' defaultValue={user.email} {...register("email", { required: true})} />
      <input type="number" placeholder='Phone' {...register("phone",{required: true})} />
      <input placeholder='Address' {...register("address", { required: true})} />
      <input type="submit" value="ADD TO CART"  className='bg-warning btn fw-bold'/>
    </form>
    </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
