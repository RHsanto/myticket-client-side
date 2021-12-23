import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Parties.css'
const Parties = () => {
  const [parties,setParties]=useState([])

  useEffect(()=>{
    fetch(`http://localhost:5000/all-events`)
    .then(res=>res.json())
    .then(data=>setParties(data.slice(12,15)))
  },[])
  return (
    <div>
      <h1 className='title'>Parties</h1>
      <div className="container">
        <div className="row g-4">

         {
           parties.map(partie=>
            <div key={partie._id} className="col-lg-4 ">
            <div className="card text-start events" >
      <img src={partie.img} className="card-img-top" alt="..."/>
    <div className="card-body ps-4">
      <h5 className="card-title">{partie.name}</h5>
      <div className=" ">
          <p><strong>Venue</strong> :{partie.Venue}</p>
          <p><strong>Date</strong> : {partie.Day}</p>
          <p><strong>Time</strong> :{partie.Time}</p>
          <p><strong>Price</strong> : ${partie.Price}</p>
          <Link to={`/detail/${partie._id}`}>
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

export default Parties;
