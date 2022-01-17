import React from 'react';

import './HighlightInput.css';

const HighlightInput = props => {

  const onButtonClickHandler = () => {
    props.onAddInput(1); //Adds 1 to counter, output adds another input on form
  };

  return (
    <div className='section-form__highlight'>
      <input type='text' placeholder={props.placeholder} />
      <button
        className='section-form__highlight__button'
        onClick={onButtonClickHandler}
      >
        + Add another
      </button>
    </div>
  );
};

export default HighlightInput;