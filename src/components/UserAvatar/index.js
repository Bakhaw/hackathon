import React from 'react';

function UserAvatar({ avatar, isActive, onClick }) {
  return <img className={`UserAvatar ${isActive ? 'UserAvatar__active' : ''}`} onClick={onClick} src={avatar} />;
}

export default UserAvatar;
