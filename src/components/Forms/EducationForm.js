import React from 'react';

import DatePicker from './FormElements/DatePicker';
import SectionForm from './FormElements/SectionForm';
import './EducationForm.css';

const EducationForm = props => {
  return (
    <div className='education'>
      <DatePicker />
      <SectionForm
        title={'Area of Study'}
        establishment={'School Name'}
        highlight={'Education highlight'}
      />
    </div>
  );
};

export default EducationForm;