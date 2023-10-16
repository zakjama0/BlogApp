import React from 'react'
import {auth, provider} from "./firebase-config";
import {signInWithPopup} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Login({setIsAuth}) {
  let navigate = useNavigate();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result)=> {

      // Keeping the user logged in if they close tab
      localStorage.setItem("isAuth", true);
      // Recognising whether we are logged in or not, checking if auth is true
      setIsAuth(true);
      // When I log in I can be redirected to the home page
      navigate("/")


    })
  };
  
  
  
  return (
    <div className='loginPage'>
      <p>Sign in with Google to Continue</p>
      <button className='login-with-google-btn' onClick={signInWithGoogle}> Sign in with Google</button>

    
    </div>
  )
}

export default Login