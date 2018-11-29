import React, { Component } from 'react';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { withContext } from '../../Context';

class Form extends Component {
  state = {
    email: '',
    firstname: '',
    lastname: '',
    password: ''
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFormSubmit = async () => {
    const { email, firstname, lastname } = this.state;
    await this.props.contextActions.handleRegisterSubmit({ email, firstname, lastname });
    await this.props.handleNext();
  };

  render() {
    const { email, firstname, lastname, password } = this.state;
    return (
      <div className='Form__container'>
        <div className='Form__custom__row'>
          <Input label='Nom' name='lastname' onChange={this.handleInputChange} type='text' value={lastname} />
          <Input label='Prénom' name='firstname' onChange={this.handleInputChange} type='text' value={firstname} />
        </div>

        <Input label='E-mail' name='email' onChange={this.handleInputChange} type='email' value={email} />
        <Input label='Mot de passe' name='password' onChange={this.handleInputChange} type='password' value={password} />

        <Button onClick={this.handleFormSubmit} text='Suivant' />
      </div>
    );
  }
}

export default withContext(Form);
