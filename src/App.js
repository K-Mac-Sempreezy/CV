import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useImmer } from 'use-immer';

import ShowResume from './components/preview/ShowResume';
import EditResume from './components/edit/EditResume';
import Card from './components/elements/UIElements/Card';

import './App.css';
import { useEffect } from 'react/cjs/react.development';

 export const PLACEHOLDERS = {
   highlight: 'Experience highlight',
   additional: 'Optional highlight',
 };

 const DUMMY_PROFILE =
   'Results-driven and motivated Software Engineer with a demonstrated experience in improving software pertormance, testing and updating existing software, and developing new software functionalities. Offers proven track record of extraordinary achievements, strong attention to detail, and ability to finish projects on schedule and within budget.';
// const DUMMY_EXPERIENCE =
//   'Developed and implemented tools which increased the level of automation and efficiency of installing and configuring servers.';

// const formObject = {
//   id: uuidv4(),
// startDate: '',
// endDate: '',
// location: '',
// position: '',
// establishment: '',
// highlights: [],
// };

const App = () => {
  const [personal, setPersonal] = useImmer({});
  const [profile, setProfile] = useImmer('');
  const [experience, setExperience] = useImmer([
    {
      id: uuidv4(),
      // startDate: '',
      // endDate: '',
      // location: '',
      // position: '',
      // establishment: '',
      highlights: [],
    },
  ]);
  const [education, setEducation] = useImmer([
    {
      id: uuidv4(),
      // startDate: '',
      // endDate: '',
      // location: '',
      // position: '',
      // establishment: '',
      highlights: [],
    },
  ]);
  // const [skillsList, setSkillsList] = useImmer([]);



  const onPersonalHandler = (key, value) => {
    setPersonal(draft => {
      draft[key] = value;
    });
  };

  const onProfileHandler = profile => {
    setProfile(profile);
  };

  const onExperienceHandler = (id, event) => {
    const name = event.target.name;
    const value = event.target.value;
    setExperience(draft => {
      const item = draft.find(item => item.id === id);
      item[name] = value;
    });
  };

  const onExperienceHighlightHandler = (id, event) => {
    const elementId = event.target.id;
    const value = event.target.value;
    setExperience(draft => {
      const item = draft.find(item => item.id === id);
      const highlight = item.highlights.find(
        subItem => subItem.id === elementId,
      );
      if (!highlight) {
        item.highlights.push({ id: elementId, text: value });
      } else {
        highlight.text = value;
      }
    });
  };

  // const onExperienceHighlightHandler = (id, event) => {
  //   const elementId = event.target.id;
  //   const value = event.target.value;
  //   if (
  //     experience.map(item =>
  //       item.id === id
  //         ? {
  //             ...item,
  //             highlights: [
  //               ...item.highlights,
  //               item.highlights.map(subItem =>
  //                 subItem.id === elementId ? true : false,
  //               ),
  //             ],
  //           }
  //         : false,
  //     )
  //   ) {
  //     setExperience(prevList => {
  //       return prevList.map(item => {
  //         return item.id === id
  //           ? {
  //               ...item,
  //               highlights: [
  //                 ...item.highlights,
  //                 item.highlights.map(subItem =>
  //                   subItem.id === elementId
  //                     ? { ...subItem, text: value }
  //                     : subItem,
  //                 ),
  //               ],
  //             }
  //           : item;
  //       });
  //     });
  //   } else {
  //     setExperience(prevList => {
  //       return prevList.map(item => {
  //         return item.id === id
  //           ? {
  //               ...item,
  //               highlights: [
  //                 ...item.highlights,
  //                 { id: elementId, text: value },
  //               ],
  //             }
  //           : item;
  //       });
  //     });
  //   }
  // };

  const onAddExperienceHandler = () => {
    setExperience(draft => {
      draft.push({ id: uuidv4, highlights: [] });
    });
  };

  const onDeleteExperienceHandler = id => {
    if (experience.length === 1) {
      return;
    }
    setExperience(draft => draft.filter(item => item.id !== id));
  };

  const onEducationHandler = (id, event) => {
    const name = event.target.name;
    const value = event.target.value;
    setEducation(draft => {
      const item = draft.find(item => item.id === id);
      item[name] = value;
    });
  };

  const onAddEducationHandler = () => {
    setEducation(draft => {
      draft.push({ id: uuidv4, highlights: [] });
    });
  };

  const onDeleteEducationHandler = id => {
    if (education.length === 1) {
      return;
    }
    setEducation(draft => draft.filter(item => item.id !== id));
  };

  const onEducationHighlightHandler = (id, event) => {
    const elementId = event.target.id;
    const value = event.target.value;
    setEducation(draft => {
      const item = draft.find(item => item.id === id);
      const highlight = item.highlights.find(
        subItem => subItem.id === elementId,
      );
      if (!highlight) {
        item.highlights.push({ id: elementId, text: value });
      } else {
        highlight.text = value;
      }
    });
  };

  const onSkillsHandler = skillsObject => {
    // onSkills(skillsObject);
  };

  useEffect(() => {
    console.log(experience);
  }, [experience]);

  return (
    <div className='parent'>
      <EditResume
        id='edit-resume'
        onPersonal={onPersonalHandler}
        onProfile={onProfileHandler}
        onExperience={onExperienceHandler}
        onExperienceHighlight={onExperienceHighlightHandler}
        onAddExperience={onAddExperienceHandler}
        onDeleteExperience={onDeleteExperienceHandler}
        onEducation={onEducationHandler}
        onAddEducation={onAddEducationHandler}
        onDeleteEducation={onDeleteEducationHandler}
        onEducationHighlight={onEducationHighlightHandler}
        onSkills={onSkillsHandler}
        experience={experience}
        education={education}
        placeholder={PLACEHOLDERS}
        />
      <Card className={'resume'}>
        <ShowResume
          id='show-resume'
          personal={personal}
          profile={profile ? profile : DUMMY_PROFILE}
          experience={experience}
          education={education}
          placeholder={PLACEHOLDERS}
          // skills={skillsList}
        />
      </Card>
    </div>
  );
};

export default App;
