import React from 'react';
import { NavLink } from 'react-router-dom';



const NavBar = ({ currentUser, logout }) => {

  const defaultNavBar = () => (
    <div className="default-navbar">
      <img src={window.images.logo}/>
      <div className="default-links">
        <NavLink to="/login" className="signin"><p>Sign In</p></NavLink>
        <NavLink to="/signup" className="signup"><p>Sign Up</p></NavLink>
      </div>
    </div>
  );

  const personalNavBar = () => (
    <nav className="personal-navbar">
      <img src={window.images.logo}/>
      <div className="personal-links"></div>
      <button className="header-button" onClick={logout}>Log Out</button>
    </nav>
  );

  return currentUser ? personalNavBar() : defaultNavBar();
};


export default NavBar;

