import React from 'react';
import SkillsExampleInputs from './FormElements/SkillsExampleInputs';

import SkillsTypeLabelInput from './FormElements/SkillsTypeLabelInput';
import './SkillsForm.css';

const SkillsForm = props => {
  return (
    <div className='skills-form'>
      <SkillsTypeLabelInput />
      <SkillsExampleInputs />
    </div>
  );
};

export default SkillsForm;