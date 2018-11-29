import React, { Component, createContext } from 'react';

const { Consumer, Provider } = createContext();

export const withContext = Comp => props => <Consumer>{context => <Comp {...context} {...props} />}</Consumer>;

export class MyProvider extends Component {
  state = {
    user: {
      email: '',
      firstname: '',
      lastame: '',
      sex: ''
    },
    hobbies: []
  };

  handleRegisterSubmit = userInfos => {
    this.setState({
      user: userInfos
    });
  };

  render() {
    const { user } = this.state;
    return (
      <Provider
        value={{
          contextActions: {
            handleRegisterSubmit: this.handleRegisterSubmit
          },
          contextState: {
            user
          }
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}
