import React from 'react';

import './BulletPoint.css';

const BulletPoint = props => {
  return (
    <div className='bullet-point'>
      <div className='bullet-point__point'>•</div>
      <div className='bullet-point__text'>{props.text}</div>
    </div>
  );
};

export default BulletPoint;