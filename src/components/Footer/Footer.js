import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
  return (
    <div>
      <div className="footer-section  ">
        <div className="container ">
          <div className="row g-4  pt-5">
            <div className="col-lg-4 text-start">
              <h2>myticket</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, architecto. Quaerat, fugiat animi tenetur eius possimus maiores voluptatum vel cupiditate, cumque debitis temporibus deleniti quia!</p>

              <h4>Stay Connected</h4>
              <div className="footer-icon ">
                <a target='_blank' href="https://www.facebook.com">      <i className="fab fa-facebook-f"></i></a>
               <a target='_parent' href="https://www.youtube.com/"><i className="fab fa-youtube"></i></a>
            <a target='_blank' href="https://twitter.com/home"> <i className="fab fa-twitter"></i></a>
           
           <a target='_blank' href="https://www.pinterest.com/"><i className="fab fa-pinterest-p"></i></a>
            
          </div>
            </div>
            <div className="col-lg-4 ">
              <h4>Quick Link</h4>
              <div className='footer-menu text-start'>
            <ul>
              <NavLink to='/home'><li>Home</li></NavLink>
              <NavLink to='/upcomingEvent'><li>upcoming</li></NavLink>
              <NavLink to='/events'><li>events</li></NavLink>
              <NavLink to='/search'><li>search</li></NavLink>
              <NavLink to='/gallery'><li>gallery</li></NavLink>
              <NavLink to='/contact'><li>contact</li></NavLink>
            </ul>
          </div>
      </div>
      <div className="col-lg-4 text-end">
        <h3>Contact Us</h3>
      <p>  Level-4, 34, Awal Centre, Banani, Dhaka <i className="fas fa-map-marked-alt"></i></p>
 <p>Official: web@programming-hero.com <i className="fas fa-envelope"></i></p>

  <p> Helpline : 01322901104 <i className="fas fa-phone-alt"></i></p>
      </div>
         </div>
        
         
          
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
