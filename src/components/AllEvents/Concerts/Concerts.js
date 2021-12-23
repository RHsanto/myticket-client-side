import React, { useEffect, useState } from 'react';
import './Concerts.css'
const Concerts = () => {
  const [concerts,setConcerts]=useState([])

  useEffect(()=>{
    fetch(`http://localhost:5000/all-events`)
    .then(res=>res.json())
    .then(data=>setConcerts(data.slice(22,28)))
  },[])
  return (
    <div>
      <h1 className='title'>Concerts</h1>
      <div className="container">
        <div className="row g-4 mb-5">
        {
           concerts.map(concert=>
            <div key={concert._id} className="col-lg-4 ">
            <div className="card text-start events" >
      <img src={concert.img} className="card-img-top" alt="..."/>
    <div className="card-body ps-4">
      <h5 className="card-title">{concert.name}</h5>
      <div className=" ">
          <p><strong>Venue</strong> :{concert.Venue}</p>
          <p><strong>Date</strong> : {concert.Day}</p>
          <p><strong>Time</strong> :{concert.Time}</p>
          <p><strong>Price</strong> : ${concert.Price}</p>
          <button className='btn btn-warning'> Book Ticket</button>
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

export default Concerts;