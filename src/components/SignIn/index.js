import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

const Sigin = props => {
  console.log('signing props', props);
  const [state, setState] = useState({
    email: '',
    password: '',
    error: null
  });

  let isInvalid;

  function handleChange(evt) {
    setState({
      ...state,
      [evt.target.name]: evt.target.value
    });
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    const { email, password } = state;

    isInvalid = password === '' || email === '';

    if (!isInvalid) {
      props.firebase
        .doSignInWithEmailAndPassword(email, password)
        .then(() => {
          setState({ email: '', password: '', error: null });
          props.history.push(ROUTES.HOME);
        })
        .catch(error => {
          setState({
            ...state,
            error
          });
        });
    }
  }

  return (
    <SigInForm handleSubmit={handleSubmit} handleChange={handleChange} isInvalid={isInvalid} />
  );
};

const SigInForm = ({ handleSubmit, handleChange, isInvalid }) => (
  <React.Fragment>
    <h1>Signin!</h1>
    <form onSubmit={handleSubmit}>
      <input type="email" onChange={handleChange} name="email" />
      <br />
      <input type="password" onChange={handleChange} name="password" />
      <br />
      <button disabled={isInvalid} type="submit">
        Submit!
      </button>
    </form>
  </React.Fragment>
);

export default Sigin;
