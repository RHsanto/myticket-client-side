import React from 'react';
import CountUp from 'react-countup';
import './Counts.css'
const Counts = () => {
  return (
    <div>
      <div className="counter my-5 d-flex justify-content-center align-items-center">
       <div className="container ">
         <div className="row g-4">
           <div className="col-lg-4" >
           <h1>
             <span className='border-bottom border-2'>
             <CountUp end={600}
                duration={3}
                delay={5}>
               </CountUp>
             </span>
           
           </h1>
           <h2>event organozed</h2>
           </div>
           <div className="col-lg-4 "> <h1 >
           <span className='border-bottom border-2'>  <CountUp end={19220}
                  duration={3}
                  delay={5}>
            </CountUp></span>
            
           </h1>
           <h2>active users</h2>
           </div>
        <div className="col-lg-4">
           <h1>
             <span className='border-bottom border-2'>
             <CountUp end={154779}
                        duration={3}
                        delay={5}>
               </CountUp>
            </span>
           </h1>
           <h2>tickets sold</h2>
           </div>
         </div>
       </div>
      </div>
   
    </div>
  );
};

export default Counts;