import React from 'react';

import './SkillsInput.css';

const SkillsInput = props => {
  return (
    <div className='skill'>
      <div>
        <input type='text' placeholder='Skill example' />
      </div>
      <div>
        <input type='text' placeholder='Skill level' />
      </div>
    </div>
  );
};

export default SkillsInput;
