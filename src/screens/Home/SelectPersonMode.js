import React, { Component } from 'react';
import Button from '../../components/Button';
import Container from '../../components/Container';

class SelectPersonMode extends Component {

  render() {
    const { handleRandom, handleSelectPerson } = this.props;
    return (
      <Container title='Avec qui ?'>
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
      </Container>
    );
  }
}

export default SelectPersonMode;
