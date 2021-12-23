import React, { useEffect, useState } from 'react';
import './Theaters.css'
const Theaters = () => {
  const [theaters,setTheaters]=useState([])

  useEffect(()=>{
    fetch(`http://localhost:5000/all-events`)
    .then(res=>res.json())
    .then(data=>setTheaters(data.slice(28,34)))
  },[])
  return (
    <div>
      <h1 className='title'>Theaters</h1>
      <div className="container">
        <div className="row mb-5 g-4">
        {
           theaters.map(theaters=>
            <div key={theaters._id} className="col-lg-4 ">
            <div className="card text-start events" >
      <img src={theaters.img} className="card-img-top" alt="..."/>
    <div className="card-body ps-4">
      <h5 className="card-title">{theaters.name}</h5>
      <div className=" ">
          <p><strong>Venue</strong> :{theaters.Venue}</p>
          <p><strong>Date</strong> : {theaters.Day}</p>
          <p><strong>Time</strong> :{theaters.Time}</p>
          <p><strong>Price</strong> : ${theaters.Price}</p>
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

export default Theaters;