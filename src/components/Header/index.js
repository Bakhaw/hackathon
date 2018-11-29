import React from 'react';
import PreviousButton from '../PreviousButton';

function Header({ onClick, step, title }) {
  return (
    <div className='Header'>
      {step > 0 && <PreviousButton onClick={onClick} />}
      <h3 className='Header__title'>{title}</h3>
    </div>
  );
}

export default Header;
