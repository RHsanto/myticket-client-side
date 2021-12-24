import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Ticket.css'
const Ticket = () => {
  const {ticketId}=useParams();
  console.log(ticketId);
  const[details,setDetails]=useState([]);
  useEffect(()=>{
    fetch(`https://polar-garden-80118.herokuapp.com/booking/${ticketId}`)
    .then(res=>res.json())
    .then(data=>setDetails(data))
  },[])
  return (
    <div>
      <div className="container">
        <div className="row my-5">
        <div className="col-lg-6">
          <img className='img-fluid' src={details.img} alt="" />
        </div>
        <div className="col-lg-6">
         <div className="details text-start ms-4">
           <h1>{details.name}</h1>
           <p><strong>{details.Venue}</strong></p>
           <h1>${details.Price}</h1>
           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Esse, id eos nesciunt possimus, animi rerum aspernatur 
              consequuntur saepe facere quas fugit explicabo? Animi
              Esse, id eos nesciunt possimus, animi rerum aspernatur 
              consequuntur saepe facere quas fugit explicabo? Animi
              Esse, id eos nesciunt possimus, animi rerum aspernatur 
              consequuntur saepe facere quas fugit explicabo? Animi
               tempora voluptatibus sapiente illo. Illum, recusandae animi.</p>

           <button className='btn btn-warning'> Add to Cart</button>
         </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
{/* <div  className="col-lg-4 mx-auto">
<div className="card text-start events" >
<img src={details.img} className="card-img-top" alt="..."/>
<div className="card-body ps-4">
<h5 className="card-title">{details.name}</h5>
<div className=" ">
<p><strong>Venue</strong> :{details.Venue}</p>
<p><strong>Date</strong> : {details.Day}</p>
<p><strong>Time</strong> :{details.Time}</p>
<p><strong>Price</strong> : ${details.Price}</p>
<button className='btn btn-warning'> Book Ticket</button>

</div>
</div>
</div>
</div> */}