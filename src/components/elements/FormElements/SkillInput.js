import React from 'react';

import './SkillInput.css';

const SkillInput = props => {

  const {
    id,
    type,
    placeholder,
    buttonId,
    button,
    buttonType,
    buttonLabel,
    value
  } = props.data;

  const {onChange} = props;

  const onChangeHandler = (event) => {
    onChange(event);
  };

  const onClickHandler = () => {
    console.log('Skill button clicked!');
  };

  return (
    <div className='skill-input'>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChangeHandler}
      />
      {button ? (
        <button
          id={buttonId}
          type={buttonType}
          onClick={onClickHandler}
        >
          {buttonLabel}
        </button>
      ) : null}
    </div>
  );
};

export default SkillInput;