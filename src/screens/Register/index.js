import React, { Component } from 'react';

import Form from './Form';
import LayoutContainer from '../../components/LayoutContainer';
import SelectHobbies from './SelectHobbies';
import SubmitRegistration from './SubmitRegistration';
import Header from '../../components/Header';

class Register extends Component {
  state = {
    registerStep: 1
  };

  handleNext = () => {
    this.setState(state => ({ registerStep: state.registerStep + 1 }));
  };

  handlePrev = () => {
    this.setState(state => ({ registerStep: state.registerStep - 1 }));
  };

  render() {
    const { registerStep } = this.state;
    return (
      <LayoutContainer>
        <div className='Register__container'>
          <Header title='Inscription' onClick={this.handlePrev} step={registerStep} />
          {registerStep === 1 && <Form handleNext={this.handleNext} />}
          {registerStep === 2 && <SelectHobbies handleNext={this.handleNext} />}
          {registerStep === 3 && <SubmitRegistration />}
        </div>
      </LayoutContainer>
    );
  }
}

export default Register;
