import React, { Component } from 'react';
import Header from '../../components/Header';

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

  render() {
    return (
      <div>
        <Header title='Tu veux faire quoi ?' />
      </div>
    );
  }
}

export default Home;
