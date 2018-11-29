import React from 'react';
import ChevronLeft from '../../assets/pictos-layout/fleche_retour.png';
import ChevronRight from '../../assets/pictos-layout/fleche_suivant.png';

function Footer({ chevronLeft, chevronRight, handlePrev, handleNext }) {
  return (
    <div className='Footer'>
      {chevronLeft && (
        <div className='Footer__chevron-left' onClick={handlePrev}>
          <img src={ChevronLeft} />
          <p>Précédent</p>
        </div>
      )}
      {chevronRight && (
        <div className='Footer__chevron-right' onClick={handleNext}>
          <p>Suivant</p>
          <img src={ChevronRight} />
        </div>
      )}
    </div>
  );
}

export default Footer;
