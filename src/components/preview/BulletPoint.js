import React from 'react';

import './BulletPoint.css';

const BulletPoint = props => {

  const { value } = props.text;
  return (
    <div className='bullet-point'>
      <div className='bullet-point__point'>•</div>
      <div className='bullet-point__text'>
        {value ? value : 'Your highlight here'}
      </div>
    </div>
  );
};

export default BulletPoint;