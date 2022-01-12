import React from 'react';

import Icon from '../ui-elements/icon';
import Heading from './heading';
import './section-heading.css';

const SectionHeading = props => {
  return (
    <div className='section-heading'>
      <Icon icon={props.icon}/>
      <Heading>{props.section}</Heading>
    </div>
  );
};

export default SectionHeading;