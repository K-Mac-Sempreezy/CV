import React from 'react';

import './Profile.css';

const PLACEHOLDER__PROFILE =
  'Write something here about your experience and what you are looking for in a new role. ';
const Profile = props => {
  const { profile } = props;

  return (
    <div className='profile'>
      {profile ? profile : PLACEHOLDER__PROFILE}
    </div>
  );
};

export default Profile;