import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

const SignUp = () => {
  const [form, setForm] = useState({ form: {} });
  const [state, setState] = useState({
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null
  });

  function handleChange(evt) {
    console.log('change', evt.target.name);
    setState({
      ...state,
      [evt.target.name]: evt.target.value
    });
  }

  console.log('state', state);

  function handleSubmit(evt) {}

  return (
    <React.Fragment>
      <h1>SignUp</h1>
      <SignUpForm handleSubmit={handleSubmit} handleChange={handleChange} />
    </React.Fragment>
  );
};

const SignUpForm = ({ handleSubmit, handleChange }) => (
  <React.Fragment>
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} name="email" placeholder="email" />
      <button type="submit">Sign up!</button>
    </form>
  </React.Fragment>
);

const SignUpLink = () => (
  <React.Fragment>
    <p>
      Don't have an account?
      <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </p>
  </React.Fragment>
);

export default SignUp;
