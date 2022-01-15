import React from 'react';

import './DatePicker.css';

const DatePicker = props => {

  const { onData } = props;

  const onInputHandler = event => {
    const key = event.target.id;
    const value = event.target.value;
    onData(key, value);
  };
 

  return (
    <div className='date'>
      <div className='date__start'>
        <label htmlFor='start'>Start date:</label>
        <input
          type='date'
          id='experience__start'
          name='start-date'
          onInput={onInputHandler}
        />
      </div>
      <div className='date__end'>
        <label htmlFor='end'>End date:</label>
        <input
          type='date'
          id='experience__end'
          name='end-date'
          onInput={onInputHandler}
        />
      </div>
    </div>
  );
};

export default DatePicker;