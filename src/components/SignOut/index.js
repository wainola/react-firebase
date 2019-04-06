import React from 'react';
import { withFirebase } from '../Firebase';

const SignOut = ({ firebase }) => {
  console.log('signout firebase', firebase);
  return (
    <button type="button" onClick={firebase.doSignOut}>
      Signout!
    </button>
  );
};

export default withFirebase(SignOut);
