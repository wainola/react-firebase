import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';

import { FirebaseContext } from '../Firebase';

import * as ROUTES from '../../constants/routes';

const App = () => (
  <Router>
    <Navigation />
    <br />

    <Route exact path={ROUTES.LANDING} component={LandingPage} />
    <FirebaseContext.Consumer>
      {firebase => (
        <Route
          exact
          path={ROUTES.SIGN_UP}
          render={props => <SignUpPage firebase={firebase} {...props} />}
        />
      )}
    </FirebaseContext.Consumer>
    <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
    <Route exact path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
    <Route exact path={ROUTES.HOME} component={HomePage} />
    <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
    <Route exact path={ROUTES.ADMIN} component={AdminPage} />
  </Router>
);

export default App;
