import React from 'react';

import DateShow from './DateShow';
import BulletPoint from './BulletPoint';
import './LongFormShow.css';

const LongFormShow = props => {
  const { elementItem } = props;
  let title = '';
  let establishment = '';
  let location = '';
  let fields = '';
  let highlights = '';

  if (elementItem.component === 'experience') {
    fields = elementItem.fields;
    highlights = elementItem.highlights;

    const positionObject = fields.find(
      item => item.label === 'Position',
    );
    if (positionObject.value) {
      title = positionObject.value;
    }

    const companyObject = fields.find(
      item => item.label === 'Company',
    );
    if (companyObject.value) {
      establishment = companyObject.value;
    }
  } else if (elementItem.component === 'education') {
    fields = elementItem.fields;
    highlights = elementItem.highlights;

    const degreeObject = fields.find(
      item => item.label === 'Area of study',
    );
    if (degreeObject.value) {
      title = degreeObject.value;
    }

    const schoolObject = fields.find(item => item.label === 'School');
    if (schoolObject.value) {
      establishment = schoolObject.value;
    }
  }

  const locationObject = fields.find(
    item => item.label === 'Location',
  );
  if (locationObject.value) {
    location = locationObject.value;
  }

  return (
    <div className='longform-preview'>
      <div className='longform-preview__date-location'>
        <DateShow elementItem={elementItem} />
        <div>{location ? location.toUpperCase() : 'CITY, STATE'}</div>
      </div>
      <div className='longform-preview__title'>
        {title ? title : 'Position/Area of study'}
      </div>
      <div className='longform-preview__establishment'>
        {establishment ? establishment : 'Workplace/School'}
      </div>
      {highlights
        ? highlights.map(item => (
            <BulletPoint key={item.id} id={item.id} text={item} />
          ))
        : null}
    </div>
  );
};

export default LongFormShow;
