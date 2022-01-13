import React from 'react';

import Button from '../../UIElements/Button';
import './SectionForm.css';

const SectionForm = props => {
  return (
    <div className='section-form'>
      <input type='text' placeholder={props.title} />
      <input type='text' placeholder={props.establishment} />
      <div className='section-form__highlight'>
        <input placeholder={props.highlight} />
        <Button className={'section-form__highlight__button'} label={'+ Add another'}/>
      </div>
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