import React from 'react';

import AddDeleteButtons from '../elements/FormElements/AddDeleteButtons';
import SkillInput from '../elements/FormElements/SkillInput';
import './SkillsForm.css';

const SkillsForm = props => {
  const {fields} = props.skill;
  const {onSkills, id} = props;

  const onChangeHandler = (event) => {
    onSkills(id, event);
  }

  return (
    <div className='skill'>
      {fields.map((item, index) => (
        <SkillInput key={item.id} id={item.id} data={item} value={item.value} onChange={onChangeHandler} />
      ))}
      <AddDeleteButtons />
    </div>
  );
};

export default SkillsForm;