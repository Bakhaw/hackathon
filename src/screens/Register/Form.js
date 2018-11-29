import React, { Component } from 'react';

import Boy from '../../assets/pictos-layout/homme.png';
import Girl from '../../assets/pictos-layout/femme.png';

import Button from '../../components/Button';
import Input from '../../components/Input';
import UserAvatar from '../../components/UserAvatar';

import { withContext } from '../../Context';
import NextButton from '../../components/NextButton';

class Form extends Component {
  state = {
    email: '',
    firstname: '',
    lastname: '',
    password: '',
    sex: ''
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFormSubmit = async () => {
    const { email, firstname, lastname, sex } = this.state;
    await this.props.contextActions.handleRegisterSubmit({ email, firstname, lastname, sex });
    await this.props.handleNext();
  };

  chooseSex = sex => {
    this.setState({ sex });
  };

  render() {
    const { email, firstname, lastname, password, sex } = this.state;
    return (
      <div className='Form__container'>
        <div className='Form__custom__row'>
          <Input label='Nom' name='lastname' onChange={this.handleInputChange} type='text' value={lastname} />
          <Input label='Prénom' name='firstname' onChange={this.handleInputChange} type='text' value={firstname} />
        </div>

        <Input label='Email' name='email' onChange={this.handleInputChange} type='email' value={email} />
        <Input label='Mot de passe' name='password' onChange={this.handleInputChange} type='password' value={password} />

        <div className='Form__choose-sex'>
          <UserAvatar avatar={Boy} isActive={sex === 'boy'} onClick={() => this.chooseSex('boy')} />
          <UserAvatar avatar={Girl} isActive={sex === 'girl'} onClick={() => this.chooseSex('girl')} />
        </div>

        <div className='Form__chevron-right__container'>
          <NextButton onClick={this.handleFormSubmit} />
        </div>
      </div>
    );
  }
}

export default withContext(Form);
