import React from 'react';

import DatePicker from './FormElements/DatePicker';
import SectionForm from './FormElements/SectionForm';
import './ExperienceForm.css';

const ExperienceForm = props => {
  return (
    <div className='experience'>
      <DatePicker />
      <SectionForm
        title={'Job Title'}
        establishment={'Company Name'}
        highlight={'Experience highlight'}
      />
    </div>
  );
};

export default ExperienceForm;