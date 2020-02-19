import React from 'react';
import { NavLink } from 'react-router-dom';
// import NavBar from '../nav_bar/nav_bar';


class Splash extends React.Component {

  demoUser() {
    localStorage.setItem('demoUser', 'true');
    window.location.hash = "/login";
  };

  render() {
    return (
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
          <NavLink to="/login" className="splash-signup" onClick={this.demoUser}><p>Demo Login</p></NavLink>
        </div>

        <img src={window.images.splash_gif} />
      </div>
    )
  }
};


export default Splash;
