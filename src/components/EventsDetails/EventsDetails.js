import React from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const EventsDetails = () => {
  const{user}=useAuth()
  const {id} =useParams();
  console.log(id,user);
  return (
    <div>
      <h1>EventsDetails</h1>
      <h1>EventsDetails</h1>
      <h1>EventsDetails</h1>
    </div>
  );
};

export default EventsDetails;