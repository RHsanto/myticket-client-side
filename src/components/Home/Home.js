import React, { useState } from 'react';
import Slider from '../Home/Slider/Slider';
import AllEvents from '../AllEvents/AllEvents';
import Counts from '../Counts/Counts';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import './Home.css'
import { useEffect } from 'react';


const Home = () => {
  const[homeEvents,setHomeEvents]=useState([]);
  useEffect(()=>{
    fetch(`https://rocky-river-97621.herokuapp.com/all-events`)
  .then(res=>res.json())
  .then(data=>setHomeEvents(data.slice(0,3)))
  },[])
   return (
    <div>
      <Slider/>
       <div className="upcoming ">
         <div className="container ">
           <div className="row my-5">
             <div className="col-lg-8 text-start">
               <h4 className='fw-bold border-start border-3 border-warning h-25'><span className='ms-1'>UPCOMING EVENTS</span></h4>
               <p className='my-4'>If you are looking for a fun event, book your favorite
                  event now. Here you will find many more 
                 concerts, parties, theaters, communities, 
                 sports related events from where you can easily 
                 book tickets. Then why not book your favorite show now?</p>
             </div>
             <div className="col-lg-4">
             <Link to='/upcomingEvent'>
             <button className='btn btn-outline-warning '>SEE ALL UPCOMING EVENTS</button>
             </Link>
             </div>
           </div>
           <div className="row m-2 g-4">
           {homeEvents.map(homeevent=>
              <div key={homeevent._id} className="col-lg-4 px-0 text-start">
              <div className="card border-0">
              <img src={homeevent.img} className='img' alt="img" />
              <div className="d-flex justify-content-between p-3 info">
              <div className="up1-info text-light fw-bold">
                <p><small>{homeevent.name.slice(0,31)}</small></p>
              </div>
              <div className="info-btn mt-3">
             <Link to={`/ticket/${homeevent._id}`}>
             <button className='btn btn-warning'>GET TICKET</button>
             </Link>
             </div>
              </div>
              
            
              </div>
           </div>
            )}
             
           </div>

         </div>
       </div>
       <AllEvents/>
       <Counts/>
     <Footer/>
    </div>
  );
};

export default Home;