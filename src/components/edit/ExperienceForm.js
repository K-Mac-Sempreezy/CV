import React from 'react';

import DatePicker from '../elements/FormElements/DatePicker';
import SectionForm from '../elements/FormElements/SectionForm';
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