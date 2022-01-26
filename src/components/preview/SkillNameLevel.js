import React from 'react'; 

import './SkillNameLevel.css';

const SkillNameLevel = props => {
  console.log(props.data)

  const {value, level} = props.data;

  return (
    <div className='skill-name-level'>
      <div className='skill-name-level__name'>{value || 'Skill name'}</div>
      <div className='skill-name-level__level'>{level.value || 'Skill level'}</div>
    </div>
  );
};

export default SkillNameLevel;