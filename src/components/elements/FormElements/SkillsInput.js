import React from 'react';

import './SkillsInput.css';

const SkillsInput = props => {
  return (
    <div className='skills'>
      <input type='text' placeholder={props.placeholder} />
      <button
        className={`skills__button`}
      >{props.buttonLabel}</button>
    </div>
  );
};

export default SkillsInput;
