import React from 'react';
import DoubleChevronRight from '../../assets/pictos-layout/double_fleche.png';
function Button({ chevron, className, onClick, text }) {
  return (
    <button className={className} onClick={onClick}>
      <p>{text}</p>
      {chevron && <img className='Button__double-chevron' src={DoubleChevronRight} />}
    </button>
  );
}

export default Button;
