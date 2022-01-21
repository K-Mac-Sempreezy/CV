import React from 'react';

import { PLACEHOLDERS } from '../../App';
import './BulletPoint.css';

const BulletPoint = props => {

  const { text } = props;
  return (
    <div className='bullet-point'>
      <div className='bullet-point__point'>•</div>
      <div className='bullet-point__text'>
        {text ? text : PLACEHOLDERS.bulletPoint}
      </div>
    </div>
  );
};

export default BulletPoint;