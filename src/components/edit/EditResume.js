import React from 'react';

import EducationForm from '../edit/EducationForm';
import ExperienceForm from '../edit/ExperienceForm';
import PersonalForm from '../edit/PersonalForm';
import SkillsForm from '../edit/SkillsForm';
import './EditResume.css';

const EditResume = props => {
  const {
    onPersonal,
    onProfile,
    onExperience,
    onAddExperience,
    onDeleteExperience,
    onExperienceHighlight,
    onEducation,
    onAddEducation,
    onDeleteEducation,
    onEducationHighlight,
    onSkills,
    experience,
    education,
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

  const onAddExperienceHandler = () => {
    onAddExperience();
  };

  const onDeleteExperienceHandler = id => {
    onDeleteExperience(id);
  };

  const onEducationHandler = (id, event) => {
    onEducation(id, event);
  };

  const onEducationHighlightHandler = (id, event) => {
    onEducationHighlight(id, event)
  };

  const onAddEducationHandler = () => {
    onAddEducation();
  };

  const onDeleteEducationHandler = id => {
    onDeleteEducation(id);
  };

  const onSkillsHandler = skillsObject => {
    onSkills(skillsObject);
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
      <div>
        {experience.map((item, index) => (
          <ExperienceForm
            key={item.id}
            id={item.id}
            experience={experience}
            onExperience={onExperienceHandler}
            onHighlight={onExperienceHighlightHandler}
            onAddExperience={onAddExperienceHandler}
            onDeleteExperience={onDeleteExperienceHandler}
          />
        ))}
      </div>
      <div>Education</div>
      <div>
        {education.map((item, index) => (
          <EducationForm
            key={item.id}
            id={item.id}
            onEducation={onEducationHandler}
            onEducationHighlight={onEducationHighlightHandler}
            onAddEducation={onAddEducationHandler}
            onDeleteEducation={onDeleteEducationHandler}
          />
        ))}
      </div>
      <div>Skills</div>
      <SkillsForm onSkills={onSkillsHandler} />
    </div>
  );
};

export default EditResume;
