import React from 'react';

import './ExperienceForm.css';

const ExperienceForm = props => {
  return (
    <React.Fragment>
      <form className='experience'>
        <div className='experience__date-container'>
          <div className='experience__date'>
            <label htmlFor='start'>Start date:</label>
            <input type='date' id='start' name='start-date' />
          </div>
          <div className='experience__date'>
            <label htmlFor='end'>End date:</label>
            <input type='date' id='end' name='end-date' />
          </div>
        </div>
        <input type='text' placeholder='Job title' />
        <input type='text' placeholder='Company name' />
        <input type='text' placeholder='City, State' />
        <div className='experience__highlight'>
          <input type='text' placeholder='Highlight' />
          <button>+ Add another</button>
        </div>
      </form>
      <div className='experience__buttons'>
        <button id='delete'>Delete</button>
        <button id='add'>Add</button>
      </div>
    </React.Fragment>
  );
};

export default ExperienceForm;