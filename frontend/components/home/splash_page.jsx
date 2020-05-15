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
      <div>
        <div className="splash-top">
          <div className="splash-text">
            <h1>
              It's Time to Do<br /> 
              Money
            </h1>
            <p>
              Ticker, a pioneer of commission-<br />
              free investing, gives you more ways<br /> 
              to make your money work harder.<br />
            </p>
            <NavLink to="/login" className="splash-signup" onClick={this.demoUser}><p>Demo Login</p></NavLink>
          </div>
          <img src={window.images.splash_gif} />
        </div>
        <div className="splash-bottom">
          <h1>Break Free from Commission Fees</h1><br />
          <h4>Make unlimited commission-free trades in stocks, funds, and options with<br />
            Ticker Financial. The same goes for buying and selling cryptocurrencies with<br /> 
            Ticker Crypto. Zero commission fees.</h4><br />
          <div className="disclosure">
            <i className="fas fa-info-circle"> </i> 
            <h5>Commissions Disclosure</h5>
          </div>
        </div>
      </div>
    )
  }
};


export default Splash;
