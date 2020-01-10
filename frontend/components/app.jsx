import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';


import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import NavBarContainer from './home/nav_bar/nav_bar_container';
import Splash from './home/nav_bar/splash';

import { AuthRoute, ProtectedRoute } from '../util/route.util';

const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link"></Link>
      <NavBarContainer />
    </header>
    <Switch>
      <AuthRoute exact path='/' component={Splash} />;
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    </Switch>
  </div>
);

export default App;