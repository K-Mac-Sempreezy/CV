import React from 'react';

import DateLocation from './date-location';
import Title from './title';
import Name from './name';
import BulletPoint from './bullet-point';

const Experience = props => {
  return (
    <React.Fragment>
      <DateLocation date={props.date} location={props.location} />
      <Title title={props.title} />
      <Name name={props.name} />
      <BulletPoint text={props.text} />
    </React.Fragment>
  );
};

export default Experience;