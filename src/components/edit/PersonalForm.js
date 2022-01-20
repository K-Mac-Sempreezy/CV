import React from 'react';

import './PersonalForm.css';

const PersonalForm = props => {
  const { onPersonal } = props;

  const inputChangeHandler = event => {
    const key = event.target.id;
    const value = event.target.value;
    onPersonal(key, value);
  };

  return (
    <form className='personal'>
      <input
        id='applicant__firstName'
        type='text'
        placeholder='First name'
        onChange={inputChangeHandler}
        />
      <input
        id='applicant__lastName'
        type='text'
        placeholder='Last name'
        onChange={inputChangeHandler}
        />
      <input
        id='applicant__jobTitle'
        type='text'
        placeholder='Job Title'
        onChange={inputChangeHandler}
        />
      <input
        id='applicant__address'
        type='text'
        placeholder='Address'
        onChange={inputChangeHandler}
        />
      <input
        id='applicant__phone'
        type='text'
        placeholder='Phone'
        onChange={inputChangeHandler}
        />
      <input
        id='applicant__email'
        type='email'
        placeholder='Email'
        onChange={inputChangeHandler}
      />
    </form>
  );
};

export default PersonalForm;
