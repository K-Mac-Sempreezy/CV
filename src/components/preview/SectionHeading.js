import React from 'react';

import Icon from '../elements/UIElements/icons/Icon';
import Heading from './Heading';
import './SectionHeading.css';

const SectionHeading = props => {
  return (
    <div className='section-heading'>
      <Icon icon={props.icon}/>
      <Heading>{props.section}</Heading>
    </div>
  );
};

export default SectionHeading;