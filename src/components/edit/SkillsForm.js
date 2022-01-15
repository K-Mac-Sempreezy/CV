import React from 'react';

import SkillsInput from '../elements/FormElements/SkillsInput';
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
        placeholder={'Skill name'}
        buttonLabel={'+ Add another'}
      />
      <SkillsInput
        placeholder={'Skill level'}
        buttonLabel={'Graph'}
      />
    </div>
  );
};

export default SkillsForm;