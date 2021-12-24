import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Theaters.css'
const Theaters = () => {
  const [theaters,setTheaters]=useState([])

  useEffect(()=>{
    fetch(`https://polar-garden-80118.herokuapp.com/all-events`)
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
          <Link to={`/ticket/${theaters._id}`}>
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

export default Theaters;