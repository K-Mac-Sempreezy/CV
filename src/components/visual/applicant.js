import React from 'react';

import './applicant.css';

const Applicant = props => {
  return (
    <div className='applicant'>
      <h2>{props.firstName}</h2>
      <div>&nbsp;</div>
      <h2>{props.lastName}</h2>
    </div>
  );
};

export default Applicant;