import React from 'react';

import UserIcon from './user-icon';
import SkillsIcon from './skills-icon';
import EducationIcon from './education-icon';
import ExperienceIcon from './experience-icon';
import './icon.css';

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
