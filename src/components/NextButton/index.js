import React from 'react';
import ChevronRight from '../../assets/pictos-layout/fleche_suivant.png';

function NextButton({ onClick }) {
  return <img alt='Bouton suivant' className='NextButton' onClick={onClick} src={ChevronRight} />;
}

export default NextButton;
