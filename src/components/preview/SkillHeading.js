import React from 'react'; 

import './SkillHeading.css';

const SkillHeading = props => {
  const {id, value} = props.data.skills;
  return (
    <div id={`skill-heading-${id}`} className='skill-heading'>
      <div className='skill-heading__hyphen'>-</div>
      {value ? value.toUpperCase() : 'SKILL TYPE'}
    </div>
  );
 
};

export default SkillHeading;