import React from 'react';

import DatePicker from '../elements/FormElements/DatePicker';
import SectionForm from '../elements/FormElements/SectionForm';
import './EducationForm.css';

const EducationForm = props => {
  const { onStartDate, onEndDate } = props;

  const startDateHandler = startDate => {
    onStartDate(startDate);
  };
  
  const endDateHandler = endDate => {
    onEndDate(endDate);
  };

  return (
    <div className='education'>
      <DatePicker
        onStartDate={startDateHandler}
        onEndDate={endDateHandler}
      />
      <SectionForm
        title={'Area of Study'}
        establishment={'School Name'}
        highlight={'Education highlight'}
      />
    </div>
  );
};

export default EducationForm;