import React from 'react';

import './DateLocation.css';

const DateLocation = props => {
  return (
    <div className='date-location'>
      <div className='date-location__date'>
        <div>{props.startDate || 'START DATE'}</div>
        <div className='date-location__hyphen'>-</div>
        <div>{props.endDate || 'END DATE'}</div>
      </div>
      <div>{props.location || 'CITY, STATE'}</div>
    </div>
  );
};

export default DateLocation;
