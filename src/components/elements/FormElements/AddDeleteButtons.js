import React from 'react';

import './AddDeleteButtons.css';

const AddDeleteButtons = props => {
  const { onAdd, onDelete, id } = props;

  const onClickDeleteHandler = () => {
    onDelete();
  };
  
  const onClickAddHandler = () => {
    onAdd();
  };

  return (
    <div className='buttons'>
      <button
        id={`delete-${id}`}
        className='delete'
        onClick={onClickDeleteHandler}
      >
        Delete
      </button>
      <button
        id={`add-${id}`}
        className='add'
        onClick={onClickAddHandler}
      >
        Add
      </button>
    </div>
  );
};

export default AddDeleteButtons;