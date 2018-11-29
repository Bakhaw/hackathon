import React from 'react';
import { Link } from 'react-router-dom';

// import BulleChat from '../../assets/pictos-layout/bulle-chat.png';
import Boy from '../../assets/pictos-layout/homme.png';
import Girl from '../../assets/pictos-layout/femme.png';

import Button from '../../components/Button';
import UserAvatar from '../../components/UserAvatar';
import { withContext } from '../../Context';

function SubmitRegistration({ contextState }) {
  const { firstname, sex } = contextState.user;
  return (
    <div className='SubmitRegistration'>
      <h1 className='SubmitRegistration__title'>Bienvenue {firstname}</h1>
      <p>Votre compte à été crée !</p>
      {/* <img className='SubmitRegistration__bulle-chat' src={BulleChat} /> */}
      <div className='SubmitRegistration__avatar'>
        <UserAvatar avatar={sex === 'girl' ? Girl : Boy} />
      </div>
      <Link to='/home'>
        <Button chevron={true} className='SubmitRegistration__submit__button' text='ENTRER' />
      </Link>
    </div>
  );
}

export default withContext(SubmitRegistration);
