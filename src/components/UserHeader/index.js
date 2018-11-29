import React from 'react';

import LogoCourt from '../../assets/pictos-layout/logocourt.png';
import Boy from '../../assets/pictos-layout/homme.png';
import Girl from '../../assets/pictos-layout/femme.png';

import { withContext } from '../../Context';

function UserHeader({ contextState }) {
  console.log(contextState.user);
  return (
    <div className='UserHeader'>
      <img className='UserHeader__logo' src={LogoCourt} />
      <img className='UserHeader__avatar' src={contextState.user === 'girl' ? Girl : Boy} />
    </div>
  );
}

export default withContext(UserHeader);
