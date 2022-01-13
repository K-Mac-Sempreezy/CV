import React from 'react';

import DatePicker from './FormElements/DatePicker';
import SectionForm from './FormElements/SectionForm';

const EducationForm = props => {
  return (
    <React.Fragment>
      <DatePicker />
      <SectionForm
        title={'Area of Study'}
        establishment={'School Name'}
        highlight={'Education highlight'}
      />
    </React.Fragment>
  );
};

export default EducationForm;