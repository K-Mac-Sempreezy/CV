import React from 'react';

const AdditionalHighlight = props => {
  const {onDelete, onChange} = props;
  const onClickHandler = event => {
    
    onDelete(props.id)
  };

  const inputChangeHandler = event => {
    const value = event.target.value;
    const id = event.target.id;
    console.log({id, value})
    onChange(value, id);
  };


  return (
    <li className={props.containerClass}>
      <input
        id={props.id}
        className={props.inputClass}
        type='text'
        placeholder={props.placeholder}
        onChange={inputChangeHandler} 
      />
      <button
        id={props.id}
        type='button'
        className={props.buttonClass}
        onClick={onClickHandler}
      >
        delete
      </button>
    </li>
  );
};

export default AdditionalHighlight;
