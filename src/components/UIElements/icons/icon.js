import React from 'react';
import { FaHeart } from 'react-icons/fa';

import './icon.css';

const Icon = props => {
  return (
    <i className='icon' icon={props.icon}>
      <div className='icon__circle'>
        <FaHeart className='icon__shape' />
      </div>
    </i>
  );
};

export default Icon;
