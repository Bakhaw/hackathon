import React from 'react';
import { Link } from 'react-router-dom';

import Boy from '../../assets/pictos-layout/homme.png';
import Girl from '../../assets/pictos-layout/femme.png';

import Button from '../../components/Button';
import UserAvatar from '../../components/UserAvatar';
import { withContext } from '../../Context';

function SubmitRegistration({ contextState }) {
  console.log('props', contextState.user);
  const { firstname, sex } = contextState.user;
  return (
    <div>
      <p>Votre compte à été crée {firstname} !</p>
      <UserAvatar avatar={sex === 'girl' ? Girl : Boy} />
      <Link to='/home'>
        <Button text='Go' />
      </Link>
    </div>
  );
}

export default withContext(SubmitRegistration);
