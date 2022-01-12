import React from 'react';

import './edit-resume.css';

const EditResume = props => {
  return (
    <div className='edit'>
      <form>
        <input type='text' placeholder='First name' />
        <input type='text' placeholder='Last name' />
        <input type='text' placeholder='Address' />
        <input type='text' placeholder='Phone' />
        <input type='email' placeholder='Email' />
      </form>
    </div>
  );
};

export default EditResume;