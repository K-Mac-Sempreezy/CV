import React from 'react';

import Button from '../../UIElements/Button';
import HighlightInput from './HighlightInput';
import './SectionForm.css';

const SectionForm = props => {
  return (
    <div className='section-form'>
      <input className='section-form__input' type='text' placeholder={props.title} />
      <input className='section-form__input' type='text' placeholder={props.establishment} />
      <HighlightInput highlight={props.highlight} />
      <div className='section-form__buttons'>
        <Button
          className={'section-form__delete'}
          label={'Delete'}
          type={'submit'}
        />
        <Button
          className={'section-form__add'}
          label={'Add'}
          type={'submit'}
        />
      </div>
    </div>
  );
};

export default SectionForm;