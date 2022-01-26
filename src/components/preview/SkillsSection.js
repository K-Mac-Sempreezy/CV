import React from 'react';

import SkillHeading from './SkillHeading';
import SkillNameLevel from './SkillNameLevel';
import './SkillsSection.css';

const SkillsSection = props => {

  // console.log(props.skills);
  const {fields} = props.skills; //one skill type here

  return (
    <div className='skills-section'>
      <SkillHeading data={props} />
      {fields
        ? fields.map(item => (
            <SkillNameLevel key={item.id} id={item.id} data={item} />
          ))
        : null}
    </div>
  );
};

export default SkillsSection;