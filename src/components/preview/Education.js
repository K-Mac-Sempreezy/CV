import React from 'react';

import DateLocation from './DateLocation';
import Title from './Title';
import Name from './Name';

const Education = props => {
  return (
    <React.Fragment>
      <DateLocation
        start={props.startDate}
        end={props.endDate}
        location={props.location}
      />
      <Title title={props.title} />
      <Name name={props.name} />
      <div className='education__children'>{props.children}</div>
    </React.Fragment>
  );
};

export default Education;