import React from 'react';

import { withAuthorization } from '../Session';

const Home = () => (
  <React.Fragment>
    <h1>Home</h1>
    <p>This page is accesible by every signed in user</p>
  </React.Fragment>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Home);
