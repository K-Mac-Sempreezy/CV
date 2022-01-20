import React from 'react';

import './AddDeleteButtons.css';

const AddDeleteButtons = props => {
  const { onAdd, onDelete } = props;

  const onClickDeleteHandler = () => {
    onDelete();
  };
  
  const onClickAddHandler = () => {
    onAdd();
  };

  return (
    <div className='buttons'>
      <button className='delete' onClick={onClickDeleteHandler}>
        Delete
      </button>
      <button className='add' onClick={onClickAddHandler}>
        Add
      </button>
    </div>
  );
};

export default AddDeleteButtons;