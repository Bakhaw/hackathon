import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import UserAvatar from '../../components/UserAvatar';
import { withContext } from '../../Context';

function SubmitRegistration({ contextState }) {
  console.log('props', contextState);
  const { firstname } = contextState.user;
  return (
    <div>
      <p>Votre compte à été crée {firstname} !</p>
      <UserAvatar />
      <Link to='/home'>
        <Button text='Go' />
      </Link>
    </div>
  );
}

export default withContext(SubmitRegistration);
