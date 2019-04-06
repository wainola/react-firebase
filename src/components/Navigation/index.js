import React from 'react';
import { Link } from 'react-router-dom';

import SignOut from '../SignOut';
import * as ROUTES from '../../constants/routes';

const Navigation = ({ authUser }) => {
  console.log('props navigation', authUser);
  return <React.Fragment>{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</React.Fragment>;
};

const NavigationAuth = () => (
  <ul>
    <li>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={ROUTES.HOME}>Home</Link>
    </li>
    <li>
      <Link to={ROUTES.ACCOUNT}>Account</Link>
    </li>
    <li>
      <SignOut />
    </li>
  </ul>
);

const NavigationNonAuth = () => (
  <ul>
    <li>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </li>
  </ul>
);

export default Navigation;
