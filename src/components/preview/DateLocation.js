import React from 'react';

import './DateLocation.css';

const DateLocation = props => {

  const startDate = props.startDate;
  const endDate = props.endDate;
  const location = props.location;

  return (
    <div className='date-location'>
      <div className='date-location__date'>
        <div>
          {startDate ? startDate.toUpperCase() : 'START DATE'}
        </div>
        <div className='date-location__hyphen'>-</div>
        <div>{endDate ? endDate.toUpperCase() : 'END DATE'}</div>
      </div>
      <div>{location ? location.toUpperCase() : 'CITY, STATE'}</div>
    </div>
  );
};

export default DateLocation;
