import React from 'react';

import DateLocation from './date-location';
import Title from './title';
import Subtitle from './subtitle';
import BulletPoint from './bullet-point';

const Experience = props => {
  return (
    <React.Fragment>
      <DateLocation date={props.date} location={props.location} />
      <Title title={props.title} />
      <Subtitle subtitle={props.subtitle} />
      <BulletPoint text={props.text} />
    </React.Fragment>
  );
};

export default Experience;