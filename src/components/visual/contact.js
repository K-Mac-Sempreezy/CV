import React from 'react';

import './contact.css';

const Contact = props => {
  return (
    <div className='contact'>
      <div>{props.address}</div>
      <div>|</div>
      <div>{props.phone}</div>
      <div>|</div>
      <div>{props.email}</div>
    </div>
  );
};

export default Contact;