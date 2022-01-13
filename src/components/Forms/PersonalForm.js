import React from 'react';

import './PersonalForm.css';

const PersonalForm = props => {
  return (
    <form className='personal'>
      <input type='text' placeholder='First name' />
      <input type='text' placeholder='Last name' />
      <input type='text' placeholder='Address' />
      <input type='text' placeholder='Phone' />
      <input type='email' placeholder='Email' />
    </form>
  );
};

export default PersonalForm;