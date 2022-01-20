import React from 'react';

import DateLocation from './DateLocation';

const Education = props => {
  return (
    <React.Fragment>
      <DateLocation
        start={props.startDate}
        end={props.endDate}
        location={props.location}
      />
      <div>{props.title}</div> 
      <div>{props.name}</div>
      <div className='education__children'>{props.establishment}</div>
    </React.Fragment>
  );
};

export default Education;