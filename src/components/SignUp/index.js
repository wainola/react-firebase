import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

const SignUp = props => {
  console.log('props', props);
  const [state, setState] = useState({
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null
  });

  const isInvalid =
    state.passwordOne !== state.passwordTwo ||
    state.passwordOne === '' ||
    state.email === '' ||
    state.username === '';

  function handleChange(evt) {
    setState({
      ...state,
      [evt.target.name]: evt.target.value
    });
  }

  // console.log('state', state);

  function handleSubmit(evt) {
    console.log('handleSubmit', isInvalid, state);
    evt.preventDefault();
    if (!isInvalid) {
      console.log('isvalid');
      const { username, email, passwordOne } = state;

      props.firebase
        .doCreateUserWithEmailAndPassword(email, passwordOne)
        .then(authUser => {
          setState({ ...state });
          props.history.push(ROUTES.HOME);
        })
        .catch(error => setState({ error }));
    }
  }

  return (
    <SignUpForm handleSubmit={handleSubmit} handleChange={handleChange} isInvalid={isInvalid} />
  );
};

const SignUpForm = ({ handleSubmit, handleChange, isInvalid }) => (
  <React.Fragment>
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} name="username" placeholder="username" />
      <br />
      <input type="email" onChange={handleChange} name="email" placeholder="email" />
      <br />
      <input
        type="password"
        onChange={handleChange}
        name="passwordOne"
        placeholder="password one"
      />
      <br />
      <input
        type="password"
        onChange={handleChange}
        name="passwordTwo"
        placeholder="password two"
      />
      <br />
      <button disabled={isInvalid} type="submit">
        Sign up!
      </button>
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
