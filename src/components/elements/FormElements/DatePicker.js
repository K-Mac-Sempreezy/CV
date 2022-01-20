import React from 'react';
// import { v4 as uuidv4 } from 'uuid';

import './DatePicker.css';

const DatePicker = props => {

  const { onDate } = props;

  const onInputHandler = event => {
    onDate(event);
  };


  return (
    <div className='date'>
      <div className='date__start'>
        <label htmlFor='start-date'>Start date:</label>
        <input
          type='date'
          name='startDate'
          onInput={onInputHandler}
        />
      </div>
      <div className='date__end'>
        <label htmlFor='end-date'>End date:</label>
        <input
          type='date'
          name='endDate'
          onInput={onInputHandler}
        />
      </div>
    </div>
  );
};

export default DatePicker;