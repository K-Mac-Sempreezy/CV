import React from 'react';

import DateLocation from './DateLocation';
import BulletPoint from './BulletPoint';
import './Experience.css';

const Experience = props => {
  const {
    startDate,
    endDate,
    location,
    title,
    establishment,
    bullets,
  } = props.experience;

  return (
    <div className='experience_preview'>
      <DateLocation
        startDate={startDate}
        endDate={endDate}
        location={location}
      />
      <div className='experience_preview__title'>
        {title ? title : 'Your position'}
      </div>
      <div className='experience_preview__establishment'>
        {establishment ? establishment : 'Your last workplace'}
      </div>
      {bullets
        ? bullets.map((item, index) => (
            <BulletPoint
              key={item.id || index}
              id={item.id || `exhlt-${index}`}
              text={item.text || ''}
            />
          ))
        : null}
    </div>
  );
};

export default Experience;
