import React from 'react';

const AdditionalHighlight = props => {
  const {onDelete, onChange} = props;
  const onClickHandler = () => {
    onDelete(props.id)
  };

  const inputChangeHandler = event => {
    const value = event.target.value;
    const id = event.target.id;
    onChange(value, id);
  };

  return (
    <div className={props.containerClass}>
      <input
        id={props.id}
        className={props.inputClass}
        type='text'
        placeholder={props.placeholder}
        onChange={inputChangeHandler} 
      />
      <button
        type='button'
        className={props.buttonClass}
        onClick={onClickHandler}
      >
        delete
      </button>
    </div>
  );
};

export default AdditionalHighlight;
