import React from 'react';

import './Applicant.css';

const Applicant = props => {
  return (
    <div className='applicant'>
      <div className='applicant__name'>
        <div>{props.firstName}</div>
        <div>&nbsp;</div>
        <div>{props.lastName}</div>
      </div>
      <div className='applicant__title'>{props.title}</div>
    </div>
  );
};

export default Applicant;