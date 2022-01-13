import React from 'react';

import Button from '../../UIElements/Button';
import './SkillsExampleInputs.css';

const SkillsExampleInputs = props => {
  return (
    <div className='skill'>
      <div className='skill__example'>
        <input type='text' placeholder='Skill example' />
        <Button className={'skill__button'} />
      </div>
      <div className='skill__level'>
        <input type='text' placeholder='Skill level' />
        <Button className={'skill__button'} />
      </div>
    </div>
  );
};

export default SkillsExampleInputs;
