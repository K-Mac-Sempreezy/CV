import React from 'react';

import './date-location.css';

const DateLocation = props => {
  return (
    <div className='date-location'>
      <div>{props.date}</div>
      <div>{props.location}</div>
    </div>
  );
};

export default DateLocation;
