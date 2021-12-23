import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';


const SignUp = () => {
  const{signInWithGoogle}=useFirebase();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || '/';
  
  const handleGoogleLogin=()=>{
    signInWithGoogle()
    .then(result=>{
   history.push( redirect_uri);
     })
    }
  return (
    <div>
      <h1>Signup</h1>
      <div className="container mt-5">
    <div className="row ">
      <div className="col-lg-6 mx-auto">
      <div className="form-floating mb-3">
  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Email address</label>
</div>
<div className="form-floating">
  <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
  <label for="floatingPassword">Password</label>
</div>
<div className="btn btn-success mt-5" onClick={handleGoogleLogin}>Google </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default SignUp;