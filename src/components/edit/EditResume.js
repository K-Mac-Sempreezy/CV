import React from 'react';

import EducationForm from '../Forms/EducationForm';
import ExperienceForm from '../Forms/ExperienceForm';
import PersonalForm from '../Forms/PersonalForm';
import SkillsForm from '../Forms/SkillsForm';
import './EditResume.css';

const EditResume = props => {
  return (
    <div className='edit'>
      <div>Personal Info</div>
      <PersonalForm />
      <div>Experience</div>
      <ExperienceForm />
      <div>Education</div>
      <EducationForm />
      <div>Skills</div>
      <SkillsForm />
    </div>
  );
};

export default EditResume;