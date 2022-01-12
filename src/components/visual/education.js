import React from 'react';
import DateLocation from './date-location';
import Title from './title';
import Name from './name';

const Education = props => {
  return (
    <React.Fragment>
      <DateLocation date={props.date} location={props.location} />
      <Title title={props.title} />
      <Name name={props.name} />
      <div>{props.highlights}</div>
    </React.Fragment>
  );
};

export default Education;