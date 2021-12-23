import React from 'react';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import useFirebase from '../../hooks/useFirebase';
import './Sign-in&Sign-Up.css'
const SignIn = () => {
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
    
      <div className="container mt-5">
      <div className="row  shadow-lg  m-5 p-5">
        <div className="col  my-5">
          <h1 className='mb-5'>Please Login</h1>
        <button onClick={handleGoogleLogin} className="btn btn-success">
        <i className="fab fa-google me-2 fs-4"></i> 
          Sign in with Google 
        </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default SignIn;