import React from 'react';

import DateLocation from './DateLocation';
import Title from './Title';
import Name from './Name';
import BulletPoint from './BulletPoint';

const Experience = props => {
  return (
    <React.Fragment>
      <DateLocation date={props.date} location={props.location} />
      <Title title={props.title} />
      <Name name={props.name} />
      <BulletPoint text={props.bullet} />
    </React.Fragment>
  );
};

export default Experience;