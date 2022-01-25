import React from 'react';

import './BulletPoint.css';

const BulletPoint = props => {

  const { text } = props;
  return (
    <div className='bullet-point'>
      <div className='bullet-point__point'>•</div>
      <div className='bullet-point__text'>
        {text ? text : 'PLACEHOLDER'}
      </div>
    </div>
  );
};

export default BulletPoint;