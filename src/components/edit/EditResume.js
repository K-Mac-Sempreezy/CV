import React from 'react';
import ExperienceForm from '../Forms/ExperienceForm';

import PersonalForm from '../Forms/PersonalForm';
import './EditResume.css';

const EditResume = props => {
  return (
    <React.Fragment>
      <div className='edit'>
        <div>Personal Info</div>
        <PersonalForm />
        <div>Experience</div>
        <ExperienceForm />
        
      </div>
    </React.Fragment>
  );
};

export default EditResume;