import React from 'react';
import { Link} from 'react-router-dom';
import EImg1 from '../../images/events-1.jpg'
import EImg2 from '../../images/events-2.jpg'
import EImg3 from '../../images/events-3.jpg'
import EImg4 from '../../images/events-4.jpeg'
import EImg5 from '../../images/events-5.jpg'
import EImg6 from '../../images/events-6.jpg'

import './AllEvents.css'
const AllEvents = () => {
  return (
    <div>
 <div className="container my-5">
   <h4 className='text-start border-start border-warning border-3'><span className='ms-2'>EVENTS BY CATEGORIES</span></h4>
   <div className="row">
     <div  data-aos="fade-right" 
       data-aos-offset="300"
       data-aos-easing="ease-in-sine"
      className="col-lg-4 event ">
    <Link to='/main-events'>
    <div  className="allevents e-1">
     <img src={EImg1} alt="" />
      <h1>EVENTS</h1>
     </div>
    </Link>
     </div>
     <div  data-aos="fade-down" 
       data-aos-easing="linear"
       data-aos-duration="1500"className="col-lg-4 event">
     <Link to='/parties'>
       <div className="allevents e-2">
       <img src={EImg2} alt="" />
       <h1>PARTIES</h1>
       </div>
     </Link>
     </div>
     <div data-aos="fade-left" 
       data-aos-offset="300"
       data-aos-easing="ease-in-sine"
       className="col-lg-4 event">
     <Link to='/sports'>
     <div className="allevents e-3">
     <img src={EImg3} alt="" />
     <h1>SPORTS</h1>
     </div>
     </Link>
     </div>
    
  
   </div>

   <div className="row">
    
     <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
      className="col-lg-4 event">
   <Link to ='/communities'>
   <div className="allevents e-4">
    <img src={EImg4} alt="" />
    <h1>COMMUNITIES</h1>
    </div>
   </Link>
     </div>
     <div  data-aos="fade-up"
           data-aos-duration="3000"
          className="col-lg-4 event">
   <Link to='/concert'>
   <div className="allevents e-5">
    <img src={EImg5} alt="" />
    <h1>CONCERTS</h1>
    </div>
   </Link>
     </div>

     <div data-aos="fade-left" 
       data-aos-offset="300"
       data-aos-easing="ease-in-sine"
        className="col-lg-4 event">
    <Link to ='/theaters'>
    <div className="allevents e-6">
     <img src={EImg6} alt="" />
     <h1>THEATERS</h1>
     </div>
    </Link>
      </div>
   </div>
 </div>
    </div>
  );
};

export default AllEvents;