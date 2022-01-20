import React from 'react';

import DateLocation from './DateLocation';
import Title from './Title';
import Name from './Name';

const Experience = props => {

  return (
    <React.Fragment>
      <DateLocation startDate={props.startDate} endDate={props.endDate} location={props.location} />
      <Title title={props.title} />
      <Name name={props.name} />
      <div>{props.children}</div>
    </React.Fragment>
  );
};

export default Experience;
