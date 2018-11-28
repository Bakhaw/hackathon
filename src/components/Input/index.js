import React from 'react';

function Input({ name, onChange, type, value }) {
  return <input name={name} onChange={onChange} type={type} value={value} />;
}

export default Input;
