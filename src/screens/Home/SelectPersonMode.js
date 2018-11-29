import React, { Component } from 'react';
import Button from '../../components/Button';

class SelectPersonMode extends Component {

  render() {
    const { handleNext } = this.props;
    return (
      <div className='SelectPersonMode__container'>
        <Button
          onClick={handleRandom}
          className='SelectPersonMode__button'
          text='RANDOM'
          />
        <Button
          onClick={handleSelectPerson}
          className='SelectPersonMode__button'
          text='JE CHOISIS'
        />
      </div>
    );
  }
}

export default SelectPersonMode;
