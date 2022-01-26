import React from 'react';

import AddDeleteButtons from '../elements/FormElements/AddDeleteButtons';
import SkillInput from '../elements/FormElements/SkillInput';
import './SkillsForm.css';

const SkillsForm = props => {
  const { fields, type, id: skillId, label } = props.skilltype;
  const {
    onSkillsNameChange,
    onSkillsLevelChange,
    onSkillType,
    onGraphButton,
    onAddSkillName,
    onAddForm,
    onDeleteForm
  } = props;

  const skillNames = fields.filter(
    item => item.component === 'skill-name',
  );

  const onSkillTypeChangeHandler = (event) => {
    onSkillType(event);
  }

  const onNameChangeHandler = event => {
    onSkillsNameChange(skillId, event);
  };
  
  const onSkillNameButtonHandler = () => {
    onAddSkillName(skillId);
  };

  const onLevelChangeHandler = (nameId, event) => {
    onSkillsLevelChange(skillId, nameId, event)
  }

  const onGraphHandler = (nameId) => {
    onGraphButton(skillId, nameId);
  };

  const onAddFormHandler = () => {
    onAddForm();
  };

  const onDeleteFormHandler = () => {
    onDeleteForm(skillId);
  };

  return (
    <div className='skill'>
      <div className='skill-type'>
        <input
          type={type}
          id={skillId}
          placeholder={label}
          onChange={onSkillTypeChangeHandler}
        />
        <div>
          {skillNames &&
            skillNames.map(item => (
              <SkillInput
                key={item.id}
                id={item.id}
                data={item}
                onName={onNameChangeHandler}
                onAddName={onSkillNameButtonHandler}
                onGraph={onGraphHandler}
                onLevel={onLevelChangeHandler}
              />
            ))}
        </div>
      </div>
      <AddDeleteButtons
        id={skillId}
        onAdd={onAddFormHandler}
        onDelete={onDeleteFormHandler}
      />
    </div>
  );
};

export default SkillsForm;
