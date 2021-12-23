import React from 'react';
import Slider from '../Home/Slider/Slider';
import Img1 from '../../images/up-1.jpeg'
import Img2 from '../../images/up-2.jpeg'
import Img3 from '../../images/up-3.jpg'
import './Home.css'
import AllEvents from '../AllEvents/AllEvents';
import Counts from '../Counts/Counts';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';


const Home = () => {
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
             <div className="col-lg-4 px-0">
                <div className="card border-0">
                <img src={Img1} alt="img" />
                <div className="d-flex justify-content-between p-3 info">
                <div className="up1-info text-light fw-bold">
                  <span >Beach Volletball Cup IF 3</span>
                  <p><span>IF 3 Hal</span></p>
              
                </div>
                <div className="info-btn mt-3">
               <button className='btn btn-warning'>GET TICKET</button>
               </div>
                </div>
                
              
                </div>
             </div>
             <div className="col-lg-4 px-0">
             <div className="card ">
             <img src={Img2} alt="img" />
             <div className="d-flex justify-content-between p-3 info">
                <div className="up1-info text-light fw-bold">
                  <span >Guitar Solo & Dance</span>
                  <p><span>La Terazza</span></p>
              
                </div>
                <div className="info-btn mt-3">
               <button className='btn btn-warning'>GET TICKET</button>
               </div>
                </div>
             </div>
             </div>
             <div className="col-lg-4 px-0">
            <div className="card">
            <img src={Img3} alt="img" />
            <div className="d-flex justify-content-between p-3 info">
                <div className="up1-info text-light fw-bold">
                  <span >Squash Junior Tournament</span>
                  <p><span>Squash Open Cube Dallas</span></p>
              
                </div>
                <div className="info-btn mt-3">
               <button className='btn btn-warning'>GET TICKET</button>
               </div>
                </div>
            </div>
             </div>
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