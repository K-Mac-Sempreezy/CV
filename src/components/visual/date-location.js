import React from 'react';

const DateLocation = props => {
  return <div className='date-location'>{props.children}</div>;
};

export default DateLocation;

// { <div>{props.date}</div>
// <div>{props.location}</div>}