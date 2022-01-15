import React from 'react';

import './Applicant.css';

const Applicant = props => {
  const { firstName, lastName, jobTitle } = props;

  return (
    <div className='applicant'>
      <div className='applicant__name'>
        {firstName ? (
          <div>{firstName}</div>
        ) : (
          <div className='applicant__placeholder'>FirstName</div>
        )}
        <div>&nbsp;</div>
        {lastName ? (
          <div>{lastName}</div>
        ) : (
          <div className='applicant__placeholder'>LastName</div>
        )}
      </div>
      {jobTitle ? (
        <div className='applicant__title'>{jobTitle}</div>
      ) : (
        <div className='applicant__placeholder'>Job Title</div>
      )}
    </div>
  );
};

export default Applicant;