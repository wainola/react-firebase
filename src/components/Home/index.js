import React, { Component } from 'react';

import { withAuthorization } from '../Session';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: {}
    };
  }

  componentDidMount() {
    this.props.firebase.users().on('value', snapshot => {
      this.setState(
        {
          users: snapshot.val(),
          loading: false
        },
        () => console.log('this.state', this.state)
      );
    });
  }

  render() {
    console.log('this.props', this.props);
    return (
      <React.Fragment>
        <h1>Home</h1>
        <p>This page is accesible by every signed in user</p>
      </React.Fragment>
    );
  }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Home);
