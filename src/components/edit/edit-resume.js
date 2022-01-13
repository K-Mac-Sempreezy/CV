import React from 'react';

import './edit-resume.css';

const EditResume = props => {
  return (
    <React.Fragment>
      <div className='edit'>
        <div>Personal Info</div>
        <form className='edit__form-personal'>
          <input type='text' placeholder='First name' />
          <input type='text' placeholder='Last name' />
          <input type='text' placeholder='Address' />
          <input type='text' placeholder='Phone' />
          <input type='email' placeholder='Email' />
        </form>
        <div>Experience</div>
        <form className='edit__form-experience'>
          <div className='edit__date-container'>
            <div className='edit__date'>
              <label for='start'>Start date:</label>
              <input type='month' id='start' name='start-date' />
            </div>
            <div className='edit__date'>
              <label for='end'>End date:</label>
              <input type='month' id='end' name='end-date' />
            </div>
          </div>
          <input type='text' placeholder='Job title' />
          <input type='text' placeholder='Company name' />
          <input type='text' placeholder='City, State' />
        </form>
        <div className='edit__buttons'>
          <button>Delete</button>
          <button>Add</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EditResume;