import React from 'react';
// import { Provider } from 'react-redux';
import NavBarContainer from './home/nav_bar/nav_bar_container';
import Splash from './home/nav_bar/splash';
import LogInFormContainer from './session/signin_form_container';
import SignUpFormContainer from './session/signup_form_container';
import StockContainer from './stock/stock_container';
import { Route, Redirect, Switch,  Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route.util';

const App = () => (
  <div>
    <header>
      {/* <Link to="/" className="header-link"></Link> */}
      <NavBarContainer />
    </header>
    <Switch>
      <AuthRoute exact path='/' component={Splash} />;
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <ProtectedRoute exact path='/stocks/:ticker' component={StockContainer} />
    </Switch>
  </div>
);

export default App;