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
    fetch(`https://polar-garden-80118.herokuapp.com/all-events`)
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
               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos officiis iure possimus quos repudiandae? Harum unde quae corporis excepturi suscipit ullam ut repellat ipsa repudiandae.</p>
             </div>
             <div className="col-lg-4">
             <Link to='/upcomingEvent'>
             <button className='btn btn-outline-warning '>SEE ALL UPCOMING EVENTS</button>
             </Link>
             </div>
           </div>
           <div className="row m-2 g-4">
           {homeEvents.map(homeevent=>
              <div className="col-lg-4 px-0">
              <div className="card border-0">
              <img src={homeevent.img} className='img' alt="img" />
              <div className="d-flex justify-content-between p-3 info">
              <div className="up1-info text-light fw-bold">
                <span >{homeevent.name.slice(0,10)}</span>
                <p><span>{homeevent.Venue}</span></p>
              </div>
              <div className="info-btn mt-3">
             <button className='btn btn-warning'>GET TICKET</button>
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