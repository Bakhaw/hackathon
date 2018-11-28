import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import UserAvatar from '../../components/UserAvatar';

function SubmitRegistration() {
  return (
    <div>
      <p>Votre compte à été crée ... !</p>
      <UserAvatar />
      <Link to='/home'>
        <Button text='Go' />
      </Link>
    </div>
  );
}

export default SubmitRegistration;
