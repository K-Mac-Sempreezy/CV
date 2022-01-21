import React from 'react';

import AddDeleteButtons from '../elements/FormElements/AddDeleteButtons';
import DatePicker from '../elements/FormElements/DatePicker';
import SectionForm from '../elements/FormElements/SectionForm';
import './EducationForm.css';

const EducationForm = props => {

  const { onStartDate, onEndDate, onAddEducation, onDeleteEducation, id } = props;

  const startDateHandler = startDate => {
    onStartDate(startDate);
  };

  const endDateHandler = endDate => {
    onEndDate(endDate);
  };

  const onAddHandler = () => {
    onAddEducation();
  };

  const onDeleteHandler = () => {
    onDeleteEducation(id);
  };

  return (
    <div className='education'>
      <DatePicker
        id={id}
        onStartDate={startDateHandler}
        onEndDate={endDateHandler}
      />
      <SectionForm
        id={id}
        location={'Location'}
        position={'Area of Study'}
        establishment={'School Name'}
      />
      <div className='education__highlight'>
        <input
          id={`ed-highlight-1-${id}`}
          type='text'
          placeholder={'Add education highlight'}
          // onChange={onHighlightChangeHandler}
        />
        <input
          id={`ed-highlight-2-${id}`}
          type='text'
          placeholder={'Optional highlight'}
          // onChange={onHighlightChangeHandler}
        />
        <input
          id={`ed-highlight-3-${id}`}
          type='text'
          placeholder={'Optional highlight'}
          // onChange={onHighlightChangeHandler}
        />
      </div>
      <AddDeleteButtons
        id={id}
        add={'Add'}
        delete={'Delete'}
        onAdd={onAddHandler}
        onDelete={onDeleteHandler}
      />
    </div>
  );
};

export default EducationForm;
