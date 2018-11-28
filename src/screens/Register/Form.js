import React, { Component } from 'react';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { withContext } from '../../Context';

const FormFields = [
  {
    name: 'name',
    type: 'text'
  },
  {
    name: 'email',
    type: 'email'
  },
  {
    name: 'password',
    type: 'password'
  }
];

class Form extends Component {
  state = {
    email: '',
    name: '',
    password: ''
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFormSubmit = async () => {
    const { name, email } = this.state;
    await this.props.contextActions.handleRegisterSubmit({ email, name });
    await this.props.handleNext();
  };

  render() {
    return (
      <>
        {FormFields.map((field, index) => {
          const { name, type } = field;
          return (
            <Input
              key={index}
              name={name}
              onChange={this.handleInputChange}
              type={type}
              value={this.state[name]}
            />
          );
        })}
        <Button onClick={this.handleFormSubmit} text='Suivant' />
      </>
    );
  }
}

export default withContext(Form);
