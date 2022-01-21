import React from 'react';

import './DatePicker.css';

const DatePicker = props => {

  const { onDate, id } = props;

  const onInputHandler = event => {
    onDate(event);
  };


  return (
    <div className='date'>
      <div className='date__start'>
        <label htmlFor='start-date'>Start date:</label>
        <input
          type='date'
          id={`startDate-${id}`}
          name='startDate'
          onInput={onInputHandler}
          />
      </div>
      <div className='date__end'>
        <label htmlFor='end-date'>End date:</label>
        <input
          id={`endDate-${id}`}
          type='date'
          name='endDate'
          onInput={onInputHandler}
        />
      </div>
    </div>
  );
};

export default DatePicker;