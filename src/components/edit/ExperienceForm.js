import React from 'react';

import DatePicker from '../elements/FormElements/DatePicker';
import SectionForm from '../elements/FormElements/SectionForm';
import AddDeleteButtons from '../elements/FormElements/AddDeleteButtons';
import { PLACEHOLDERS } from '../../App';
import './ExperienceForm.css';



const ExperienceForm = props => {

  const {
    onExperience,
    onDeleteExperience,
    onAddExperience,
    onHighlight,
    id,
  } = props;

  const onChangeHandler = event => {
    onExperience(id, event);
  };

  const onHighlightChangeHandler = event => {
    onHighlight(id, event);
  };

  const onDeleteHandler = () => {
    onDeleteExperience(id)
  };

  const onAddHandler = () => {
    onAddExperience()
  };

  return (
    <div className='experience'>
      <DatePicker onDate={onChangeHandler} />
      <SectionForm
        onSectionInput={onChangeHandler}
        location={'Location'}
        title={'Position'}
        establishment={'Company'}
      />
      <div className='experience__highlight'>
        <input
          id={`ex-highlight-1-${id}`}
          type='text'
          name='highlight_1'
          placeholder={PLACEHOLDERS.highlight}
          onChange={onHighlightChangeHandler}
          />
        <input
          id={`ex-highlight-2-${id}`}
          type='text'
          name='highlight_2'
          placeholder={PLACEHOLDERS.additional}
          onChange={onHighlightChangeHandler}
          />
        <input
          id={`ex-highlight-3-${id}`}
          type='text'
          name='highlight_3'
          placeholder={PLACEHOLDERS.additional}
          onChange={onHighlightChangeHandler}
          />
        <input
          id={`ex-highlight-4-${id}`}
          name='highlight_4'
          type='text'
          placeholder={PLACEHOLDERS.additional}
          onChange={onHighlightChangeHandler}
        />
      </div>
      <AddDeleteButtons
        onDelete={onDeleteHandler}
        onAdd={onAddHandler}
      />
    </div>
  );
};

export default ExperienceForm;
