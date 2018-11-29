import React from 'react';

import Container from '../../components/Container';
import Footer from '../../components/Footer';

function SelectHour({ handleNext, handlePrev }) {
  console.log('salu');
  return (
    <Container title='Quand ?'>
      <div>
        <p>Select Hour</p>
        <option />
      </div>
      <Footer chevronLeft handleNext={handleNext} handlePrev={handlePrev} />
    </Container>
  );
}

export default SelectHour;
