import React from 'react';

import DatePicker from './FormElements/DatePicker';
import SectionForm from './FormElements/SectionForm';

const ExperienceForm = props => {
  return (
    <React.Fragment>
      <DatePicker />
      <SectionForm
        title={'Job Title'}
        establishment={'Company Name'}
        highlight={'Experience highlight'}
      />
    </React.Fragment>
  );
};

export default ExperienceForm;