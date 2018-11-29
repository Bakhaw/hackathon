import React from 'react';

function PreviousButton({ onClick }) {
  return (
    <button className='PreviousButton' onClick={onClick}>
      Previous
    </button>
  );
}

export default PreviousButton;
