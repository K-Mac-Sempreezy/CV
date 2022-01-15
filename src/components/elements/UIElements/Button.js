import React from 'react';

const Button = props => {
  return (
    <button
      className={props.className}
      type={props.type}
      value={props.label}
    >
      {props.label}
    </button>
  );
};

export default Button;