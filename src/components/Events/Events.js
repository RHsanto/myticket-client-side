import React from 'react';
import {  BrowserRouter as Router, NavLink as Link, Route, Switch } from 'react-router-dom';
import Parties from '../AllEvents/Parties/Parties'
import Sports from '../AllEvents/Sports/Sports';
import Communities from '../AllEvents/Communities/Communities';
import Concerts from '../AllEvents/Concerts/Concerts';
import Theaters from '../AllEvents/Theaters/Theaters';

import './Events.css'
const Events = () => {
  return (
    <div className=''>
        <h1 className='title'>Select Your Favorites Event </h1>

      <div className="container">
     
      <Router>
<div className="row">
       <div className="col-lg-2 ">
       <div className="event-section bg-dark">
  <Link to='/parties'>
    <li>Parties</li>
  </Link>
  <Link to='/sports'>
    <li>Sports</li>
  </Link>
  <Link to='/communities'>
    <li>Communities</li>
  </Link>
  <Link to='/concert'>
    <li>Concert</li>
  </Link>
  <Link to='/theaters'>
    <li>Theaters</li>
  </Link>
  
</div>
       </div>
       <div className="col-lg-10">
       <Switch>
         <Route path='/parties'>
          <Parties/>
         </Route>
         <Route path='/sports'>
          <Sports/>
         </Route>
         <Route path='/communities'>
          <Communities/>
         </Route>
         <Route path='/concert'>
          <Concerts/>
         </Route>
         <Route path='/theaters'>
          <Theaters/>
         </Route>
         </Switch>
       </div>
     </div>
</Router>
      </div>
    </div>
  );
};

export default Events;



