import React from 'react';

import SkillsInput from './FormElements/SkillsInput';
import './SkillsForm.css';

const SkillsForm = props => {
  return (
    <div className='skills-form'>
      <input
        className='skills-form__label'
        type='text'
        placeholder='Skill type'
      />
      <SkillsInput
        className={'skills-form__name'}
        placeholder={'Skill name'}
        buttonLabel={'+ Add another'}
      />
      <SkillsInput
        className={'skills-form__level'}
        placeholder={'Skill level'}
        buttonLabel={'Graph'}
      />
    </div>
  );
};

export default SkillsForm;