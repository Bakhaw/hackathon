import React, { Component } from 'react';
import Button from '../../components/Button';
import Container from '../../components/Container';

class SelectPersonMode extends Component {
  render() {
    const { handleRandom, handleSelectPerson } = this.props;
    return (
      <Container title='Avec qui ?'>
        <div className='SelectMode__container'>
          <Button className='random__button' text='RANDOM' chevron />
          <Button onClick={handleSelectPerson} className='random__button selectPerson__button' text='JE CHOISIS' />
        </div>
      </Container>
    );
  }
}

export default SelectPersonMode;
