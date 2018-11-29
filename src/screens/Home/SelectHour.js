import React from 'react';
import moment from 'moment';
import Container from '../../components/Container';
import Footer from '../../components/Footer';

function SelectHour({ handleNext, handlePrev }) {
  const date = moment().format('HH:mm');
  const date2 = moment()
    .add(1, 'hour')
    .format('HH:mm');
  const date3 = moment()
    .add(2, 'hour')
    .format('HH:mm');
  const date4 = moment()
    .add(3, 'hour')
    .format('HH:mm');

  return (
    <Container title='Quand ?'>
      <div className='SelectHour__container'>
        <select>
          <option>{date}</option>
          <option>{date2}</option>
          <option>{date3}</option>
          <option>{date4}</option>
        </select>
      </div>
      <Footer chevronLeft chevronRight handleNext={handleNext} handlePrev={handlePrev} />
    </Container>
  );
}

export default SelectHour;
