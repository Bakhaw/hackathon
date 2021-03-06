import React, { Component } from 'react';

import SelectActivty from '../Home/SelectActivity';
import SelectPersonMode from '../Home/SelectPersonMode';
import SelectPersons from './SelectPersons';
import Random from '../Home/Random';
import SelectHour from './SelectHour';
import UserHeader from '../../components/UserHeader';

class Home extends Component {
  state = {
    step: 1
  };

  handleNext = () => {
    this.setState(state => ({ step: state.step + 1 }));
  };

  handlePrev = () => {
    this.setState(state => ({ step: state.step - 1 }));
  };

  handleSelectPerson = () => {
    this.setState({ step: 3 });
  };

  handleRandom = () => {
    this.setState({ step: 4 });
  };

  handleSelectHour = () => {
    this.setState({ step: 5 });
  };

  render() {
    const { step } = this.state;
    return (
      <div>
        <UserHeader />
        {step === 1 && <SelectActivty handleNext={this.handleNext} />}
        {step === 2 && <SelectPersonMode handleSelectPerson={this.handleSelectPerson} handleRandom={this.handleRandom} />}
        {step === 3 && <SelectPersons handleNext={this.handleSelectHour} handlePrev={this.handlePrev} />}
        {step === 4 && <Random handleNext={this.handleNext} />}
        {step === 5 && <SelectHour handleNext={this.handleNext} handlePrev={this.handlePrev} />}
      </div>
    );
  }
}

export default Home;
