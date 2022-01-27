import React from 'react';

import './SkillNameLevel.css';

const SkillNameLevel = props => {

  const { value: name } = props.data;
  const { isGraph, value: level } = props.data.level;

  return (
    <div className='skill-name-level'>
      <div className='skill-name-level__name'>
        {name || 'Skill name'}
      </div>
      {isGraph && (
        <div className='skill-name-level__graph'>
          <div
            style={{
              width: `${level}%`,
              height: '0.5rem',
              backgroundColor: 'rgb(71, 182, 216)',
            }}
          >{level}</div>
        </div>
      )}
      {!isGraph && (
        <div className='skill-name-level__level'>
          {level || 'Skill level'}
        </div>
      )}
    </div>
  );
};

export default SkillNameLevel;
