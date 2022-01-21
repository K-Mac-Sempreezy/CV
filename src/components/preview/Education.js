import React from 'react';

import DateLocation from './DateLocation';
import BulletPoint from './BulletPoint';
import './Education.css';

const Education = props => {
  const {
    startDate,
    endDate,
    location,
    title,
    establishment,
    bullets,
  } = props;

  return (
    <div className='education-preview'>
      <DateLocation
        startDate={startDate}
        endDate={endDate}
        location={location}
      />
      <div className='education-preview__title'>
        {title ? title : 'Area of study'}
      </div>
      <div className='education-preview__establishment'>
        {establishment ? establishment : 'School name'}
      </div>
      {bullets.map((item, index) => (
        <BulletPoint
          key={item.id || index}
          id={item.id || `edhlt-${index}`}
          text={item.text || ''}
        />
      ))}
    </div>
  );
};

export default Education;
