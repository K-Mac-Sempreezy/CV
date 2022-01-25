import React from 'react';

import './Profile.css';


const Profile = props => {

  const { profile } = props;

  return <div className='profile'>{profile ? profile : 'PLACEHOLDER'}</div>;
};

export default Profile;