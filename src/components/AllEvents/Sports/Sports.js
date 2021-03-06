import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sports.css'
const Sports = () => {
  const [sports,setSports]=useState([])

  useEffect(()=>{
    fetch(`https://rocky-river-97621.herokuapp.com/all-events`)
    .then(res=>res.json())
    .then(data=>setSports(data.slice(15,19)))
  },[])
  return (
    <div>
      <h1 className='title'>Sports Event</h1>
      <div className="container">
        <div className="row mb-5 g-4">
         
        {
           sports.map(sport=>
            <div key={sport._id} className="col-lg-4 ">
            <div className="card text-start events" >
      <img src={sport.img} className="card-img-top" alt="..."/>
    <div className="card-body ps-4">
      <h5 className="card-title">{sport.name}</h5>
      <div className=" ">
          <p><strong>Venue</strong> :{sport.Venue}</p>
          <p><strong>Date</strong> : {sport.Day}</p>
          <p><strong>Time</strong> :{sport.Time}</p>
          <p><strong>Price</strong> : ${sport.Price}</p>
          <Link to={`/ticket/${sport._id}`}>
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
  );
};

export default Sports;