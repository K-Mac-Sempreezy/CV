import React from 'react';

import DateLocation from './DateLocation';
import BulletPoint from './BulletPoint';
import './Experience.css';

const Experience = props => {
  const { startDate, endDate, location, title, establishment, bullets } =
    props;

  return (
    <React.Fragment>
      <DateLocation
        startDate={startDate}
        endDate={endDate}
        location={location}
      />
      <div className='experience__title'>
        {title ? title : 'Your position'}
      </div>
      <div className='experience__establishment'>
        {establishment ? establishment : 'Your last workplace'}
      </div>
      {bullets.length > 0 ? (
        bullets.map((item, index) => (
          <BulletPoint
            key={item.id || index}
            id={item.id || `exhlt-${index}`}
            text={item.text || ''}
          />
        ))
      ) : (
        <div style={{ 'fontSize': 'small', 'marginLeft': '1rem' }}>
          • Add an experience highlight to your resume.
        </div>
      )}
    </React.Fragment>
  );
};

export default Experience;
