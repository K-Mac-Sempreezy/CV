import React from 'react';

import './SectionForm.css';

const SectionForm = props => {
  const { onSectionInput, establishment, title, position } = props;

  const onChangeHandler = event => {
    onSectionInput(event)
  }

  return (
    <div className='section-form'>
      <input
        className='section-form__input'
        name='title'
        type='text'
        placeholder={title || position}
        onChange={onChangeHandler}
      />
      <input
        className='section-form__input'
        name='establishment'
        type='text'
        placeholder={establishment}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default SectionForm;