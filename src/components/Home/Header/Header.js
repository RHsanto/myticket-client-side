import React, { useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Header.css'
import { Link, NavLink } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';



const Header = () => {
  const{user,logOut}=useFirebase();
  const[cart,setCarts]=useState();

  useEffect(()=>{
    fetch(`https://rocky-river-97621.herokuapp.com/all-Orders/${user.email}`)
    .then(res=>res.json())
    .then(data=>setCarts(data))
  },[user.email])
  return (
<div>
    <div className='hero-section'>
      <div className="container">
      <div className="top-header p-1">
      <div className="top-1">
        <span> <i class="fas fa-phone-alt"></i> (+880)1223365478</span>
        <span> <i class="fas fa-envelope"></i> info@eticket.com</span>
     </div>
      <div className="top-2 py-1">
        {
          user.email? 
        <>
          <span className='user-name'>{user.displayName} </span>
          <button className='loged-btn' onClick={logOut}> Log-out</button> 
        </>
          :
          <><span ><Link to='signIn'>SIGN IN <i className="fas fa-sign-in-alt">
          </i></Link></span>
         
          </>
        }
        
         </div>
      </div>
      </div>
      
    </div>

  <div className="menubar ">
  <div className="container ">
      <div className="main-header">
        <div className="logo">
          <img src="img/logo.PNG" alt=""/>
          <Link to='/'>
          <h3>E-ticket</h3>
          </Link>
        </div>

        <div className="menu">
          <nav className='d-none d-md-block'>
            <ul>
              <NavLink to='/home'><li>Home</li></NavLink>
              <NavLink to='/upcomingEvent'><li>upcoming</li></NavLink>
              <NavLink to='/events'><li>events</li></NavLink>
              <NavLink to='/gallery'><li>gallery</li></NavLink>
              <NavLink to='/contact'><li>contact</li></NavLink>
            </ul>
          </nav>
         <NavLink to='/cart'>
         <button className="button btn me-3" > <ShoppingCartIcon/> {cart?.length}</button>
         </NavLink>
          
           {/* <!-- start offcanvas menu  --> */}
           <button className="btn btn-light navbar d-block d-md-none " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><MenuIcon/></button>
             <div className="offcanvas offcanvas-end w-50 text-dark bg-dark" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
             <div className="offcanvas-header">
             <h5 id="offcanvasRightLabel">Menu bar</h5>
            <button type="button" className="btn-close bg-light text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
        <>
              <NavLink to='/home'><li>Home</li></NavLink>
              <NavLink to='/upcomingEvent'><li>upcoming</li></NavLink>
              <NavLink to='/events'><li>events</li></NavLink>
              <NavLink to='/gallery'><li>gallery</li></NavLink>
              <NavLink to='/contact'><li>contact</li></NavLink>
            </>
        </ul>
      
      </div>
            </div>
        </div>
        {/* <!-- end of main-header  --> */}
      </div>
      {/* <!-- end of container --> */}
     
    </div>
  </div>

    </div>
  );
};

export default Header;
