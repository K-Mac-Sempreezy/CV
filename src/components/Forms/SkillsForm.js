import React from 'react';
import SkillsInput from './FormElements/SkillsInput';

import SkillsTypeLabelInput from './FormElements/SkillsTypeLabelInput';
import './SkillsForm.css';

const SkillsForm = props => {
  return (
    <div className='skills-form'>
      <SkillsTypeLabelInput />
      <SkillsInput />
    </div>
  );
};

export default SkillsForm;