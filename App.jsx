import {BrowserRouter as Router, Routes, Route, Link, Navigate, useNavigate} from "react-router-dom";
import './App.css';
import Home from './Home';
import CreatePost from './CreatePost';
import Login from './Login';
import React, { useState } from 'react';
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";

function App() {
  // Determining if they are logged in
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut =() =>{
  signOut(auth).then(() =>{
    localStorage.clear();
    setIsAuth(false);
    window.location.pathname="/login";
  });

  };

  return (
  <Router>
    <nav>
      <Link to="/">Home</Link>
      {/* If we are not authenticated then show the login in the nav, if we are then show button log out */}
      {!isAuth ? (<Link to="/login">Log in</Link>) :(
        <>
      <Link to="/createpost">Create Post</Link>
      <button onClick={signUserOut}>Log Out</button>
       </>
      )} 
    </nav>
    <Routes>
      <Route path="/" element={<Home isAuth = {isAuth} />}/>
      <Route path="/createpost" element={<CreatePost isAuth={isAuth} />}/> 
      <Route path="/login" element={<Login setIsAuth ={setIsAuth} />}/>
    </Routes>
  </Router>
  )
}

export default App