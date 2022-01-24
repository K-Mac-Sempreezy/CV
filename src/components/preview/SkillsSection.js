import React from 'react';

import SkillHeading from './SkillHeading';
import SkillNameLevel from './SkillNameLevel';
import './SkillsSection.css';

const SkillsSection = props => {

  const {fields} = props.skills;

  return (
    <div className='skills-section'>
      <SkillHeading />
      {fields
        ? fields.map((item, index) => (
            <SkillNameLevel key={item.id} id={item.id} skill={item} />
          ))
        : null}
    </div>
  );
};

export default SkillsSection;