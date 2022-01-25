import React from 'react';

import './DateShow.css';

const DateShow = props => {
  const { elementItem } = props;
  const date = elementItem.date;

  const startObject = date.find(
    item => item.label === 'Start date',
  );
  const start = startObject.value;

  const endObject = date.find(
    item => item.label === 'End date',
  );
  const end = endObject.value;


  
  let startMonth = new Date(start).getMonth() + 1;
  if (startMonth.toString().length !== 2) {
    startMonth = '0' + startMonth.toString();
  }
  const startYear = new Date(start).getFullYear();

  let endMonth = new Date(end).getMonth() + 1;
  if (endMonth.toString().length !== 2) {
    endMonth = '0' + endMonth.toString();
  }
  const endYear = new Date(end).getFullYear();

  return (
    <div className='date__date'>
      {start ? `${startMonth}/${startYear}` : 'START DATE'}
      <div className='date__hyphen'>-</div>
      <div>{end ? `${endMonth}/${endYear}` : 'END DATE'}</div>
    </div>
  );
};

export default DateShow;
