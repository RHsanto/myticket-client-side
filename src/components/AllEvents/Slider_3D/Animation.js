import React from 'react';
import {Carousel} from '3d-react-carousal';
import EImg1 from '../../../images/events-1.jpg'
import EImg2 from '../../../images/events-3.jpg'
import EImg3 from '../../../images/events-4.jpeg'
import EImg4 from '../../../images/commu.jpeg'
import EImg5 from '../../../images/consert.jpeg'

const Animation = () => {
let slides = [
    <img  src={EImg1} alt="1" />,
    <img  src={EImg2} alt="2" />  ,
    <img  src={EImg3} alt="3" />  ,
    <img  src={EImg4} alt="4" />  ,
    <img src={EImg5} alt="5" />   ];
  return (
    <div>
      <h1>Animation</h1>
      <Carousel slides={slides}  />
    </div>
  );
};

export default Animation;