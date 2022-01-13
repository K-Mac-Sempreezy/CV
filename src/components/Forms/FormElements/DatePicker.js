import React from 'react';

import './DatePicker.css';

const DatePicker = props => {
  return (
    <div className='date'>
      <div className='date__start'>
        <label htmlFor='start'>Start date:</label>
        <input type='date' id='start' name='start-date' />
      </div>
      <div className='date__end'>
        <label htmlFor='end'>End date:</label>
        <input type='date' id='end' name='end-date' />
      </div>
    </div>
  );
};

export default DatePicker;