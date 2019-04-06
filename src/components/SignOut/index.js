import React from 'react';

const SignOut = props => (
  <button type="button" onClick={props.firebase.doSignOut}>
    Signout!
  </button>
);

export default SignOut;
