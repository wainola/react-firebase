import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { withFirebase } from '../Firebase';

import * as ROUTES from '../../constants/routes';

class Sigin extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      user: {
        email: '',
        password: '',
        error: null
      },
      isInvalid: undefined
    };
  }

  handleChange(evt) {
    this.setState({
      ...this.state,
      user: {
        ...this.state.user,
        [evt.target.name]: evt.target.value
      }
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    const { email, password } = this.state;
    let { isInvalid } = this.state;

    isInvalid = password === '' || email === '';

    if (!isInvalid) {
      this.props.firebase
        .doSignInWithEmailAndPassword(email, password)
        .then(() => {
          this.setState({
            user: { email: '', password: '', error: null }
          });
          this.props.history.push(ROUTES.HOME);
        })
        .catch(error => {
          console.log('error');
          this.setState({
            ...this.state,
            error
          });
        });
    }
  }

  render() {
    console.log('this.props signin', this.props);
    return (
      <SigInForm
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        isInvalid={this.isInvalid}
      />
    );
  }
}

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

export default withRouter(withFirebase(Sigin));
