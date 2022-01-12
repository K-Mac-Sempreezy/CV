import React from 'react';

const Icon = props => {
  return <i className={props.icon}>{props.children}</i>;
};

export default Icon;