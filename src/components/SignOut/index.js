import React from 'react';
import { withFirebase } from '../Firebase';

const SignOut = ({ firebase }) => (
  <button type="button" onClick={firebase.doSignOut}>
    Signout!
  </button>
);

export default withFirebase(SignOut);
