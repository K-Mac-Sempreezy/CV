import React from 'react';

import './SkillInput.css';

const SkillInput = props => {
  const { onAddName, onGraph, onName, onLevel, id: nameId } = props;
  const { type, label, button, level } = props.data;

  const onNameChangeHandler = event => {
    onName(event);
  };

  const onAddNameHandler = () => {
    onAddName();
  };

  const onLevelChangeHandler = event => {
    onLevel(nameId, event);
  };

  const onGraphButtonHandler = () => {
    onGraph(nameId);
  };

  return (
    <React.Fragment>
      <div className='skill-input'>
        <input
          id={nameId}
          type={type}
          placeholder={label}
          onChange={onNameChangeHandler}
        />
        <button
          id={button.id}
          type={button.type}
          onClick={onAddNameHandler}
        >
          {button.label}
        </button>
      </div>
      <div className='skill-input'>
        <input
          id={level.id}
          type={level.type}
          placeholder={level.label}
          onChange={onLevelChangeHandler}
        />
        <button
          id={level.button.id}
          type={level.button.type}
          onClick={onGraphButtonHandler}
        >
          {level.button.label}
        </button>
      </div>
    </React.Fragment>
  );
};

export default SkillInput;
