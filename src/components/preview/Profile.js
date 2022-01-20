import React from 'react';

import { PLACEHOLDERS } from '../../App';
import './Profile.css';


const Profile = props => {

  const { profile } = props;

  return <div className='profile'>{profile ? profile : PLACEHOLDERS.profile}</div>;
};

export default Profile;