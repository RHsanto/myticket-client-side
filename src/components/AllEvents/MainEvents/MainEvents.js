import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './MainEvents.css'

const MainEvents = () => {
  const[mainevents,setMainevents]=useState([]);

  useEffect(()=>{
    fetch(`https://polar-garden-80118.herokuapp.com/all-events`)
    .then(res=>res.json())
    .then(data=>setMainevents(data.slice(6,12)))
  },[])

  return (
    <div>
      <h1 className='title'>Events</h1>
      <div className="up-coming">
       <div className="container">
         <div className="row mb-5 g-4">
           {
             mainevents.map(mainevent=>
              <div className="col-lg-4"
              key={mainevent._id}>
          <div className="card text-start events" >
    <img src={mainevent.img} className="card-img-top" alt="..."/>
  <div className="card-body ps-4">
    <h5 className="card-title">{mainevent.name}</h5>
    <div className=" ">
        <p><strong>Venue</strong> : {mainevent.Venue}</p>
        <p><strong>Date</strong> :{mainevent.Day}</p>
        <p><strong>Time</strong> : {mainevent.Time}</p>
        <p><strong>Price</strong> : ${mainevent.Price}</p> 
        <Link to={`/ticket/${mainevent._id}`}>
          <button className='btn btn-warning'> Book Ticket</button>
          </Link>
      </div>
       </div>
          </div>
             </div>
              )
           }
          </div>
      
    </div>
    </div>
    </div>
  );
};

export default MainEvents;