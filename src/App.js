import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import ShowResume from './components/preview/ShowResume';
import EditResume from './components/edit/EditResume';
import Card from './components/elements/UIElements/Card';

import './App.css';

const DUMMY_PROFILE =
  'Results-driven and motivated Software Engineer with a demonstrated experience in improving software pertormance, testing and updating existing software, and developing new software functionalities. Offers proven track record of extraordinary achievements, strong attention to detail, and ability to finish projects on schedule and within budget.';
const DUMMY_EXPERIENCE =
  'Developed and implemented tools which increased the level of automation and efficiency of installing and configuring servers.';

const formObject = {
  id: uuidv4(),
  startDate: '',
  endDate: '',
  location: '',
  position: '',
  establishment: '',
  highlights: [{ id: 'h1', value: DUMMY_EXPERIENCE }],
};

const App = () => {
  const [personal, setPersonal] = useState({});
  const [profile, setProfile] = useState('');
  const [experience, setExperience] = useState([formObject]);
  const [education, setEducation] = useState([formObject]);
  // const [skillsList, setSkillsList] = useState([]);

  const onPersonalHandler = (key, value) => {
    setPersonal(prevObject => ({
      ...prevObject,
      [key]: value,
    }));
  };

  const onProfileHandler = profile => {
    setProfile(profile);
  };

  const onExperienceHandler = (id, event) => {
    const name = event.target.name;
    const value = event.target.value;
    setExperience(prevList => {
      return prevList.map(item => {
        return item.id === id ? { ...item, [name]: value } : item;
      });
    });
  };

  const onAddExperienceHandler = () => {
    setExperience(prevList => [...prevList, { id: uuidv4() }]);
  };

  const onDeleteExperienceHandler = id => {
    if (experience.length === 1) {
      return;
    }
    setExperience(prevList =>
      prevList.filter(item => item.id !== id),
    );
  };

  const onEducationHandler = (id, event) => {
    const name = event.target.name;
    const value = event.target.value;
    setEducation(prevList => {
      return prevList.map(item => {
        return item.id === id ? { ...item, [name]: value } : item;
      });
    });
  };

  const onAddEducationHandler = () => {
    setEducation(prevList => [...prevList, { id: uuidv4() }]);
  };

  const onDeleteEducationHandler = id => {
    setEducation(prevList => prevList.filter(item => item.id !== id));
  };

  const onSkillsHandler = skillsObject => {
    // onSkills(skillsObject);
  };

  return (
    <div className='parent'>
      <EditResume
        id='edit-resume'
        onPersonal={onPersonalHandler}
        onProfile={onProfileHandler}
        onExperience={onExperienceHandler}
        onAddExperience={onAddExperienceHandler}
        onDeleteExperience={onDeleteExperienceHandler}
        onEducation={onEducationHandler}
        onAddEducation={onAddEducationHandler}
        onDeleteEducation={onDeleteEducationHandler}
        onSkills={onSkillsHandler}
        experience={experience}
        education={education}
      />
      <Card className={'resume'}>
        <ShowResume
          id='show-resume'
          personal={personal}
          profile={profile ? profile : DUMMY_PROFILE}
          experience={experience}
          education={education}
          // skills={skillsList}
        />
      </Card>
    </div>
  );
};

export default App;
