import React from 'react';

import './Contact.css';

const Contact = props => {
  const {address, phone, email} = props;
  return (
    <div className='contact'>
      {address ? (
        <div>{address}</div>
      ) : (
        <div className='contact__placeholder'>Address</div>
      )}
      <div className='contact__divider'>|</div>
      {phone ? (
        <div>{phone}</div>
      ) : (
        <div className='contact__placeholder'>Phone</div>
      )}
      <div className='contact__divider'>|</div>
      {email ? (
        <div>{email}</div>
      ) : (
        <div className='contact__placeholder'>Email</div>
      )}
    </div>
  );
};

export default Contact;