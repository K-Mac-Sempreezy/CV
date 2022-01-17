import React from 'react';

import HighlightInput from './HighlightInput';
import './SectionForm.css';

const SectionForm = props => {

  const onAddInputHandler = (num) => {
    props.onAddInput(num);
  };

  return (
    <div className='section-form'>
      <input
        className='section-form__input'
        type='text'
        placeholder={props.title}
      />
      <input
        className='section-form__input'
        type='text'
        placeholder={props.establishment}
      />
      <HighlightInput
        onAddInput={onAddInputHandler}
        placeholder={props.highlight}
      />
    </div>
  );
};

export default SectionForm;