import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Upcoming.css'
const UpcomingEvent = () => {
  const [upevents,setUpevents]=useState([]);

  useEffect(()=>{
    fetch(`https://polar-garden-80118.herokuapp.com/all-events`)
    .then(res=>res.json())
    .then(data=>setUpevents(data.slice(0,5)))
  },[])
  return (
    <div>
      <h1 className='mb-5 title'>Upcoming event</h1>
      <div className="up-coming">
       <div className="container">
         <div className="row">
           {
             upevents.map(upevent=>
              <div  className="col-lg-8 mx-auto"
              key={upevent._id}>
              <div className="card mb-3" >
     <div className="row g-0">
       <div className="col-md-5">
         <img src={upevent.img} className="img-fluid rounded-start h-100" alt="..."/>
       </div>
       <div className="col-md-7">
         <div className="card-body text-start ps-4">
           <h4 className="card-title">{upevent.name}</h4>
           <>
           <div className="div-1 ">
           <p><strong>Venue</strong> :{upevent.Venue}</p>
           <p><strong>Day</strong> : {upevent.Day}</p>
           <p><strong>Time</strong> : {upevent.Time}</p>
           <p><strong>Price</strong> : ${upevent.Price}</p>
           <Link to={`/ticket/${upevent._id}`}>
           <button className='btn btn-warning'> Book Ticket</button>
           </Link>
          
           </div>
           </>
   
          
         </div>
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

export default UpcomingEvent;