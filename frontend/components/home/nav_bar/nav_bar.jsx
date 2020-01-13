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
    <div className="personal-navbar">
      <img src={window.images.logo}/>
      <div className="dropdown">
        <button className='dropbtn'>Account</button>
        <div className="dropdown-content">
          <a href="#" className="logout-btn" onClick={logout}>Sign out</a>
          {/* <button className="header-button" onClick={logout}>Log Out</button> */}
        </div>
      </div>
    </div>
  );

  return currentUser ? personalNavBar() : defaultNavBar();
};


export default NavBar;

