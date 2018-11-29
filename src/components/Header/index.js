import React from 'react';
import HippinLogo from '../../assets/pictos-layout/logo_hippin.png';

function Header({ title }) {
  return (
    <div className='Header__container'>
      <img className='Header__logo' src={HippinLogo} />
      <h1 className='Header__title'>{title}</h1>
    </div>
  );
}

export default Header;
