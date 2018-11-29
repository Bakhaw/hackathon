import React from 'react';
import PreviousButton from '../PreviousButton';

function Header({ onClick, step, title }) {
  return (
    <div className='Header'>
      {step > 1 && <PreviousButton onClick={onClick} />}
      <h1 className='Header__title'>{title}</h1>
    </div>
  );
}

export default Header;
