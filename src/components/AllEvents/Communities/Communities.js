import React, { useEffect, useState } from 'react';
import './Communities.css'
const Communities = () => {
  const [communities,setCommunities]=useState([])

  useEffect(()=>{
    fetch(`http://localhost:5000/all-events`)
    .then(res=>res.json())
    .then(data=>setCommunities(data.slice(19,22)))
  },[])
  return (
    <div>
      <h1 className='title'>Communities</h1>
      <div className="container">
        <div className="row">
        {
           communities.map(communitie=>
            <div key={communitie._id} className="col-lg-4 ">
            <div className="card text-start events" >
      <img src={communitie.img} className="card-img-top" alt="..."/>
    <div className="card-body ps-4">
      <h5 className="card-title">{communitie.name}</h5>
      <div className=" ">
          <p><strong>Venue</strong> :{communitie.Venue}</p>
          <p><strong>Date</strong> : {communitie.Day}</p>
          <p><strong>Time</strong> :{communitie.Time}</p>
          <p><strong>Price</strong> : ${communitie.Price}</p>
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

export default Communities;