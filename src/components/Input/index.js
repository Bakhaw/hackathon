import React from 'react';

function Input({ label, name, onChange, type, value }) {
  return (
    <div className='Input__container'>
      <label className='Input__label'>{label}</label>
      <input className='Input__input' name={name} onChange={onChange} type={type} value={value} />
    </div>
  );
}

export default Input;
