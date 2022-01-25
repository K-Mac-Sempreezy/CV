import React from 'react';

import LongForm from './LongForm';
import PersonalForm from '../edit/PersonalForm';
import SkillsForm from '../edit/SkillsForm';
import './EditResume.css';

const EditResume = props => {
  const {
    onPersonal,
    onProfile,
    onExperience,
    onExperienceHighlight,
    onAddExperience,
    onDeleteExperience,
    onEducation,
    onEducationHighlight,
    onAddEducation,
    onDeleteEducation,
    onSkills,
    experience,
    education,
    skills,
  } = props;

  const onPersonalHandler = (key, value) => {
    onPersonal(key, value);
  };

  const onProfileHandler = event => {
    const enteredProfile = event.target.value;
    onProfile(enteredProfile);
  };

  const onExperienceHandler = (id, event) => {
    onExperience(id, event);
  };

  const onExperienceHighlightHandler = (id, event) => {
    onExperienceHighlight(id, event);
  };

  const onEducationHighlightHandler = (id, event) => {
    onEducationHighlight(id, event);
  };

  const onAddExperienceHandler = () => {
    onAddExperience();
  };

  const onDeleteExperienceHandler = id => {
    onDeleteExperience(id);
  };

  const onEducationHandler = (id, event) => {
    onEducation(id, event);
  };

  const onAddEducationHandler = () => {
    onAddEducation();
  };

  const onDeleteEducationHandler = id => {
    onDeleteEducation(id);
  };

  const onSkillsHandler = (id, event) => {
    onSkills(id, event);
  };

  return (
    <div className='edit'>
      <div>Personal Info</div>
      <PersonalForm onPersonal={onPersonalHandler} />
      <div>Profile</div>
      <input
        id={`profile`}
        className='edit__profile'
        type='text'
        placeholder='Add profile'
        onChange={onProfileHandler}
      />
      <div>Experience</div>
      <React.Fragment>
        {experience
          ? experience.map(item => (
              <LongForm
                key={item.id}
                id={item.id}
                elementItem={item}
                onHighlight={onExperienceHighlightHandler}
                onChange={onExperienceHandler}
                onAdd={onAddExperienceHandler}
                onDelete={onDeleteExperienceHandler}
              />
            ))
          : null}
      </React.Fragment>
      <div>Education</div>
      <React.Fragment>
        {education ? education.map(item => (
          <LongForm
            key={item.id}
            id={item.id}
            elementItem={item}
            onHighlight={onEducationHighlightHandler}
            onChange={onEducationHandler}
            onAdd={onAddEducationHandler}
            onDelete={onDeleteEducationHandler}
          />
        )): null}
      </React.Fragment>
      <div>Skills</div>
      <div>
        {skills ? skills.map(item => (
          <SkillsForm
            key={item.id}
            id={item.id}
            skill={item}
            onSkills={onSkillsHandler}
          />
        )): null}
      </div>
    </div>
  );
};

export default EditResume;
