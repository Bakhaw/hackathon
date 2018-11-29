import React from 'react';

function Container({ children, title }) {
  return (
    <div className='Container'>
      <h1 className='Container__title'>{title}</h1>
      {children}
    </div>
  );
}

export default Container;
