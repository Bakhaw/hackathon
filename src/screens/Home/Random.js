import React, { Component } from 'react';
import Button from '../../components/Button';

class Random extends Component {

  render() {
    const { handleNext } = this.props;
    return (
      <div className='SelectPersonMode__container'>
        <Button
          onClick={handleNext}
          className='SelectPersonMode__button'
          text='VALIDER'
        />
      </div>
    );
  }
}

export default Random;
