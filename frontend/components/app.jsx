import React from 'react';
// import { Provider } from 'react-redux';
import NavBarContainer from './nav_bar/nav_bar_container';
import LogInFormContainer from './session/signin_form_container';
import SignUpFormContainer from './session/signup_form_container';
import StockContainer from './stock/stock_container';
import HomeContainer from './home/home_container';

import { Route, Redirect, Switch,  Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route.util';

const App = () => (
  <div>
    <header>
      <NavBarContainer />
    </header>
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <ProtectedRoute exact path='/stocks/:ticker' component={StockContainer} />
      <Route exact path='/' component={HomeContainer} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;