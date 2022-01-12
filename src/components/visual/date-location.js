import React from 'react';

const DateLocation = props => {
  return (
    <div className='date-location'>
      <div>{props.date}</div>
      <div>{props.location}</div>
    </div>
  );
};

export default DateLocation;
