import React from 'react';

import './SectionForm.css';

const SectionForm = props => {
  const { onSectionInput, establishment, location, title, position, id } = props;

  const onChangeHandler = event => {
    onSectionInput(event)
  }

  return (
    <div className='section-form'>
      <input
        id={`titlePosition-${id}`}
        name='title'
        type='text'
        placeholder={title || position}
        onChange={onChangeHandler}
        />
      <input
        id={`establishment-${id}`}
        name='establishment'
        type='text'
        placeholder={establishment}
        onChange={onChangeHandler}
      />
      <input
        id={`location-${id}`}
        name='location'
        type='text'
        placeholder={location}
        onChange={onChangeHandler}
        />
    </div>
  );
};

export default SectionForm;