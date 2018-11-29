import React, { Component } from 'react';

import Header from '../../components/Header';
import SelectActivty from '../Home/SelectActivity';
import SelectPersonMode from '../Home/SelectPersonMode';
import SelectPersons from './SelectPersons';
import Random from '../Home/Random';

class Home extends Component {
  state = {
    step: 3
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

  render() {
    const { step } = this.state;
    return (
      <div>
        {step === 1 && <SelectActivty handleNext={this.handleNext} />}
        {step === 2 && <SelectPersonMode handleSelectPerson={this.handleSelectPerson} handleRandom={this.handleRandom} />}
        {step === 3 && <SelectPersons handleNext={this.handleNext} />}
        {step === 4 && <Random handleNext={this.handleNext} />}
      </div>
    );
  }
}

export default Home;
