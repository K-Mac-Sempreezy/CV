import React from 'react';

import Button from '../../UIElements/Button';
import './SkillsInput.css';

const SkillsInput = props => {
  return (
    <div className='skills__input'>
      <input type='text' placeholder={props.placeholder} />
      <Button className={props.className} label={props.buttonLabel} />
    </div>
  );
};

export default SkillsInput;

