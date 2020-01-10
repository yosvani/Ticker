import React from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from './nav_bar';


const Splash = props => {
  return (
    <div>
      {/* <NavBar /> */}
      <div className="splash">
        <div className="splash-text">
          <h1>
            It's Time to Do<br /> 
            Money
          </h1>
          <p>
            Robinhood, a pioneer of commission-<br />
            free investing, gives you more ways to<br />
            make your money work harder.<br />
          </p>
          <br />
          <NavLink to="/signup" className="splash-signup"><p>Sign Up</p></NavLink>
        </div>
        <img src={window.images.splash} />
      </div>
    </div>
  )
};


export default Splash;
