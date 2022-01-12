import React from 'react';

import Icon from '../ui-elements/icon';
import Heading from './heading';

const SectionHeading = props => {
  return (
    <React.Fragment>
      <Icon className={props.icon}/>
      <Heading>{props.children}</Heading>
    </React.Fragment>
  );
};

export default SectionHeading;