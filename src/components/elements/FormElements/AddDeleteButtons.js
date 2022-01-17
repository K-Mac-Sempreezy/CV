import React from 'react';

import './AddDeleteButtons.css';

const AddDeleteButtons = props => {
  return (
    <div className='buttons'>
      <button className='delete'>Delete</button>
      <button className='add'>Add</button>
    </div>
  );
};

export default AddDeleteButtons;