import React from 'react';

import './BulletPoint.css';

const BulletPoint = props => {

  const { text } = props;
  return (
    <div className='bullet-point'>
      <div className='bullet-point__point'>{text ? '•' : null }</div>
      <div className='bullet-point__text'>{text}</div>
    </div>
  );
};

export default BulletPoint;