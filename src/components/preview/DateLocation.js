import React from 'react';

import './DateLocation.css';

const DateLocation = props => {

  const startDate = props.startDate;
  let startMonth = (new Date(startDate).getMonth() + 1);
  if (startMonth.toString().length !== 2) {
    startMonth = '0' + startMonth.toString()
  }
  const startYear = new Date(startDate).getFullYear();
  
  const endDate = props.endDate;
  let endMonth = (new Date(endDate).getMonth() + 1);
  if (endMonth.toString().length !== 2) {
    endMonth = '0' + endMonth.toString()
  }
  const endYear = new Date(endDate).getFullYear();
  const location = props.location;


  return (
    <div className='date-location'>
      <div className='date-location__date'>
        <div>
          {startDate ? `${startMonth}/${startYear}` : 'START DATE'}
        </div>
        <div className='date-location__hyphen'>-</div>
        <div>{endDate ? `${endMonth}/${endYear}` : 'END DATE'}</div>
      </div>
      <div>{location ? location.toUpperCase() : 'CITY, STATE'}</div>
    </div>
  );
};

export default DateLocation;
