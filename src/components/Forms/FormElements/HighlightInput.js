import React from 'react';

import AddAnotherButton from '../../UIElements/buttons/AddAnotherButton';
import './HighlightInput.css';

const HighlightInput = props => {
  return (
    <div className='highlight'>
      <input type='text' placeholder={props.placeholder} />
      <AddAnotherButton />
    </div>
  );
};

export default HighlightInput;