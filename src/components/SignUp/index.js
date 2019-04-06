import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { withFirebase } from '../Firebase';

import * as ROUTES from '../../constants/routes';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      user: {
        username: '',
        email: '',
        passwordOne: '',
        passwordTwo: '',
        error: null
      },
      isInvalid: undefined
    };
  }

  handleChange(evt) {
    this.setState({
      ...this.state,
      [evt.target.name]: evt.target.value
    });
  }

  // console.log('state', state);

  handleSubmit(evt) {
    console.log('handleSubmit', isInvalid, this.state);
    evt.preventDefault();

    const isInvalid =
      this.state.passwordOne !== this.state.passwordTwo ||
      this.state.passwordOne === '' ||
      this.state.email === '' ||
      this.state.username === '';

    if (!isInvalid) {
      console.log('isvalid');
      const { username, email, passwordOne } = this.state;

      this.props.firebase
        .doCreateUserWithEmailAndPassword(email, passwordOne)
        .then(authUser => {
          this.setState({ ...this.state });
          this.props.history.push(ROUTES.HOME);
        })
        .catch(error => this.setState({ error }));
    } else {
      this.setState({
        isInvalid
      });
    }
  }

  render() {
    console.log('sigin render', this.props);
    return (
      <SignUpForm
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        isInvalid={this.isInvalid}
      />
    );
  }
}

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

const SignUpComponent = withRouter(withFirebase(SignUp));

export default SignUpComponent;
