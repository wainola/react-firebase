import React from 'react';
import { Link } from 'react-router-dom';

import SignOut from '../SignOut';
import * as ROUTES from '../../constants/routes';

const Navigation = props => (
  <React.Fragment>
    <ul>
      <li>
        <Link to={ROUTES.SIGN_IN}>Sign In</Link>
      </li>
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
        <Link to={ROUTES.ADMIN}>Admin</Link>
      </li>
      <li>
        <SignOut firebase={props.firebase} />
      </li>
    </ul>
  </React.Fragment>
);

export default Navigation;
