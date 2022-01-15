import React from 'react';

import UserIcon from './UserIcon';
import SkillsIcon from './SkillsIcon';
import EducationIcon from './EducationIcon';
import ExperienceIcon from './ExperienceIcon';
import './Icon.css';

const Icon = props => {
  const iconType = () => {
    switch (props.icon) {
      case 'profile':
        return <UserIcon />;
      case 'experience':
        return <ExperienceIcon />
      case 'skills':
        return <SkillsIcon />
      case 'education':
        return <EducationIcon />
        default:
    }
  };
  
  return (
    <i className='icon' icon={props.icon}>
      <div className='icon__circle'>
        {iconType()}
      </div>
    </i>
  );
};

export default Icon;
