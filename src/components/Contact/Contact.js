import React from 'react';
import './Contact.css'
const Contact = () => {
  return (
    <div>
      <h1 className='title'>GET IN TOUCH</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto mt-5">
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="floatingInput1" placeholder="Rakibul"/>
              <label for="floatingInput1">Your Name</label>
          </div>
            <div className="form-floating mb-3">
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
              <label for="floatingInput">Email address</label>
          </div>
           <div className="form-floating">
             <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
             <label for="floatingPassword">Password</label>
           </div>
           <button type="submit" className='btn btn-warning mt-4'>Submit</button>
             </div>
                </div>
                  </div>
                     </div>
  );
};

export default Contact;