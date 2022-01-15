import React from 'react';

import EducationForm from '../edit/EducationForm';
import ExperienceForm from '../edit/ExperienceForm';
import PersonalForm from '../edit/PersonalForm';
import SkillsForm from '../edit/SkillsForm';
import './EditResume.css';

const EditResume = props => {
  const { onData } = props;

  const onDataHandler = (key, value) => {
    onData(key, value);
  };

  return (
    <div className='edit'>
      <div>Personal Info</div>
      <PersonalForm onData={onDataHandler} />
      <div>Experience</div>
      <ExperienceForm onData={onDataHandler} />
      <div>Education</div>
      <EducationForm onData={onDataHandler} />
      <div>Skills</div>
      <SkillsForm onData={onDataHandler} />
    </div>
  );
};

export default EditResume;
