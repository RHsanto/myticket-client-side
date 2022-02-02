import React from 'react';
import { Link} from 'react-router-dom';
import EImg1 from '../../images/events.jpg'
import EImg2 from '../../images/events-3.jpg'
import EImg3 from '../../images/events-4.jpeg'
import EImg4 from '../../images/commu.jpeg'
import EImg5 from '../../images/consert.jpeg'
import EImg6 from '../../images/Theater.jpg'
import './AllEvents.css'




const AllEvents = () => {
  return (
    <div>
 <div className="container my-5">
   <h4 className='text-start border-start border-warning border-3'><span className='ms-2'>EVENTS BY CATEGORIES</span></h4>
  
   {/* start */}
   <div className="row g-4 my-4">
     <div  data-aos="fade-right" 
       data-aos-offset="300"
       data-aos-easing="ease-in-sine" 
      className="col-lg-4">
    <Link to='/main-events'>
    <div class="card cImg">
  <img src={EImg1} className="card-img " alt="..."/>
  <div class="card-img-overlay">
    <h1 class="card-title ctext">EVENTS</h1>
    </div>
     </div>
    </Link>
    </div>
     <div className="col-lg-4"
      data-aos="fade-down" 
      data-aos-easing="linear"
      data-aos-duration="1500">
    <Link to='/sports'>
    <div class="card cImg">
  <img src={EImg2} className="card-img " alt="..."/>
  <div class="card-img-overlay">
    <h1 class="card-title ctext">SPORTS</h1>
    </div>
     </div>
    </Link>
    </div>
     <div className="col-lg-4"
      data-aos="fade-left" 
       data-aos-offset="300"
       data-aos-easing="ease-in-sine">
    <Link to='/parties'>
    <div class="card cImg">
  <img src={EImg3} className="card-img " alt="..."/>
  <div class="card-img-overlay">
    <h1 class="card-title ctext">PARTIES</h1>
    </div>
     </div>
    </Link>
    </div>
     <div className="col-lg-4"
     data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
    <Link to='/communities'>
    <div class="card cImg ">
  <img src={EImg4} className="card-img " alt="..."/>
  <div class="card-img-overlay">
    <h1 class="card-title ctext">COMMUNITIES</h1>
    </div>
     </div>
    </Link>
    </div>

     <div className="col-lg-4"
      data-aos="fade-up"
      data-aos-duration="3000">
    <Link to='/concert'>
    <div class="card cImg">
  <img src={EImg5} className="card-img " alt="..."/>
  <div class="card-img-overlay">
    <h1 class="card-title ctext">CONCERT</h1>
    </div>
     </div>
    </Link>
    </div>
     <div className="col-lg-4"
      data-aos="fade-left" 
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
     >
    <Link to='/theaters'>
    <div class="card cImg">
  <img src={EImg6} className="card-img " alt="..."/>
  <div class="card-img-overlay">
    <h1 class="card-title ctext">THEATERS</h1>
    </div>
     </div>
    </Link>
    </div>

  </div>
{/* <Animation/> */}
 </div>
    </div>
  
  );
};

export default AllEvents;