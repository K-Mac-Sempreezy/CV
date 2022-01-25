import React from 'react';

import AddDeleteButtons from '../elements/FormElements/AddDeleteButtons';
import './SkillsForm.css';

const SkillsForm = props => {
  const { fields } = props.skill;
  const { onSkills, onAddSkill, id } = props;

  const skillType = fields.find(
    item => item.component === 'skill-type',
  );
  const skillNames = skillType.fields.filter(
    item => item.component === 'skill-name',
  );
  console.log(typeof skillNames);

  const onChangeHandler = event => {
    onSkills(id, event);
  };

  const onSkillNameButtonHandler = () => {
    onAddSkill(skillType.id);
  };

  return (
    <div className='skill'>
      <div className='skill-type'>
        <input
          type={skillType.type}
          id={skillType.id}
          placeholder={skillType.label}
        />
        {skillNames
          ? skillNames.map(item => (
              <div key={item.id}>
                <div className='skill-input-container'>
                  <input
                    key={item.id}
                    id={item.id}
                    type={item.type}
                    placeholder={item.label}
                  />
                  <button
                    id={item.button.id}
                    type={item.button.type}
                    onClick={onSkillNameButtonHandler}
                  >
                    {item.button.label}
                  </button>
                </div>
                <div className='skill-input-container'>
                  <input
                    id={item.level.id}
                    type={item.level.type}
                    placeholder={item.level.label}
                  />
                  <button
                    id={item.level.button.id}
                    type={item.level.button.type}
                  >
                    {item.level.button.label}
                  </button>
                </div>
              </div>
            ))
          : null}
      </div>
      <AddDeleteButtons />
    </div>
  );
};

export default SkillsForm;
