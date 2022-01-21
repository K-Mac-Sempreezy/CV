import React from 'react';

import AddDeleteButtons from '../elements/FormElements/AddDeleteButtons';
import DatePicker from '../elements/FormElements/DatePicker';
import SectionForm from '../elements/FormElements/SectionForm';
import './EducationForm.css';

const EducationForm = props => {

  const { onEducation, onAdd, onDelete, onHighlight, id } = props;

  const onChangeHandler = event => {
    onEducation(id, event);
  };

  const onHighlightChangeHandler = event => {
    onHighlight(id, event);
  };

  const onDeleteHandler = () => {
    onDelete(id)
  };

  const onAddHandler = () => {
    onAdd()
  };

  return (
    <div className='education'>
      <DatePicker id={id} onDate={onChangeHandler} />
      <SectionForm
        id={id}
        location={'Location'}
        position={'Area of Study'}
        establishment={'School Name'}
        onSectionInput={onChangeHandler}
      />
      
      <div className='education__highlight'>
        <input
          id={`ed-highlight-1-${id}`}
          type='text'
          placeholder={'Add education highlight'}
          onChange={onHighlightChangeHandler}
        />
        <input
          id={`ed-highlight-2-${id}`}
          type='text'
          placeholder={'Optional highlight'}
          onChange={onHighlightChangeHandler}
        />
        <input
          id={`ed-highlight-3-${id}`}
          type='text'
          placeholder={'Optional highlight'}
          onChange={onHighlightChangeHandler}
        />
      </div>
      <AddDeleteButtons
        id={id}
        onDelete={onDeleteHandler}
        onAdd={onAddHandler}
      />
    </div>
  );
};

export default EducationForm;
