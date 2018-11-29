import React, { Component } from 'react';

import Header from '../../components/Header';
import SelectActivty from '../Home/SelectActivity';
import SelectPersonMode from '../Home/SelectPersonMode';

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
  }

  handleRandom = () => {
    this.setState({ step: 4 });
  }


  render() {
    const { step } = this.state;
    return (
      <div>
        <Header title='Tu veux faire quoi ?' />
        {step === 1 && <SelectActivty handleNext={this.handleNext} />}
        {step === 2 && <SelectPersonMode 
          handleSelectPerson={this.handleNext}
          handleRandom={this.handleRandom} 
        />}
      </div>
    );
  }
}

export default Home;
