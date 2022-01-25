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
    onExperienceDate,
    onExperienceHighlight,
    onAddExperienceHighlight,
    onAddExperience,
    onDeleteExperience,
    onEducation,
    onEducationDate,
    onEducationHighlight,
    onAddEducationHighlight,
    onAddEducation,
    onDeleteEducation,
    onSkills,
    onAddSkillName,
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

  const onExperienceDateHandler = (id, event) => {
    onExperienceDate(id, event);
  }

  const onExperienceHighlightHandler = (id, event) => {
    onExperienceHighlight(id, event);
  };

  const onAddExperienceHighlightHandler = (id) => {
    onAddExperienceHighlight(id);
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

  const onEducationDateHandler = (id, event) => {
    onEducationDate(id, event);
  }

  const onAddEducationHighlightHandler = (id) => {
    onAddEducationHighlight(id);
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

  const onAddSkillNameHandler = () => {
    onAddSkillName();
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
                onAddHighlight={onAddExperienceHighlightHandler}
                onDate={onExperienceDateHandler}
                onChange={onExperienceHandler}
                onAdd={onAddExperienceHandler}
                onDelete={onDeleteExperienceHandler}
              />
            ))
          : null}
      </React.Fragment>
      <div>Education</div>
      <React.Fragment>
        {education
          ? education.map(item => (
              <LongForm
                key={item.id}
                id={item.id}
                elementItem={item}
                onAddHighlight={onAddEducationHighlightHandler}
                onHighlight={onEducationHighlightHandler}
                onDate={onEducationDateHandler}
                onChange={onEducationHandler}
                onAdd={onAddEducationHandler}
                onDelete={onDeleteEducationHandler}
              />
            ))
          : null}
      </React.Fragment>
      <div>Skills</div>
      <div>
        {skills
          ? skills.map(item => (
              <SkillsForm
                key={item.id}
                id={item.id}
                skill={item}
                onSkills={onSkillsHandler}
                onAddSkillName={onAddSkillNameHandler}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default EditResume;
