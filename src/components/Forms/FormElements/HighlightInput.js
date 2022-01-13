import React from 'react';

import Button from '../../UIElements/Button';
import './HighlightInput.css';

const HighlightInput = props => {
  return (
    <div className='section-form__highlight'>
      <input type='text' placeholder={props.highlight} />
      <Button
        className={'section-form__highlight__button'}
        label={'+ Add another'}
      />
    </div>
  );
};

export default HighlightInput;