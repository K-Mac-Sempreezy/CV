import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useImmer } from 'use-immer';

import ShowResume from './components/preview/ShowResume';
import EditResume from './components/edit/EditResume';
import Card from './components/elements/UIElements/Card';
import './App.css';

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
      component: 'experience',
      id: uuidv4(),
      label: 'Experience',
      date: [
        {
          component: 'date',
          label: 'Start date',
          type: 'date',
          id: uuidv4(),
        },
        {
          component: 'date',
          label: 'End date',
          type: 'date',
          id: uuidv4(),
        },
      ],
      highlights: [
        {
          component: 'highlight',
          label: 'Experience highlight',
          id: uuidv4(),
          type: 'text',
          button: [
            {
              component: 'button',
              id: uuidv4(),
              type: 'button',
              label: '+ Add another',
            },
          ],
        },
      ],
      fields: [
        {
          component: 'text',
          label: 'Position',
          type: 'text',
          id: uuidv4(),
        },
        {
          component: 'text',
          label: 'Company',
          type: 'text',
          id: uuidv4(),
        },
        {
          component: 'text',
          label: 'Location',
          type: 'text',
          id: uuidv4(),
        },
      ],
    },
  ]);
  const [education, setEducation] = useImmer([
    {
      component: 'education',
      id: uuidv4(),
      label: 'Education',
      date: [
        {
          component: 'date',
          label: 'Start date',
          type: 'date',
          id: uuidv4(),
        },
        {
          component: 'date',
          label: 'End date',
          type: 'date',
          id: uuidv4(),
        },
      ],
      highlights: [
        {
          component: 'highlight',
          label: 'Education highlight',
          id: uuidv4(),
          type: 'text',
          button: [
            {
              component: 'button',
              id: uuidv4(),
              type: 'button',
              label: '+ Add another',
            },
          ],
        },
      ],
      fields: [
        {
          component: 'text',
          label: 'Area of study',
          type: 'text',
          id: uuidv4(),
        },
        {
          component: 'text',
          label: 'School',
          type: 'text',
          id: uuidv4(),
        },
        {
          component: 'text',
          label: 'Location',
          type: 'text',
          id: uuidv4(),
        },
      ],
    },
  ]);
  const [skills, setSkills] = useImmer([
    {
      component: 'skill-type',
      id: uuidv4(),
      type: 'text',
      label: 'Skill category',
      fields: [
        {
          component: 'skill-name',
          id: uuidv4(),
          type: 'text',
          label: 'Skill name',
          button: {
            id: uuidv4(),
            type: 'button',
            label: '+ Add another',
          },
          level: {
            component: 'skill-level',
            id: uuidv4(),
            type: 'text',
            label: 'Level',
            isGraph: false,
            button: {
              id: uuidv4(),
              type: 'button',
              label: 'Graph it',
            },
          },
        },
      ],
    },
  ]);
  
  const onPersonalHandler = (key, value) => {
    setPersonal(draft => {
      draft[key] = value;
    });
  };

  const onProfileHandler = profile => {
    setProfile(profile);
  };

  const onExperienceHandler = (id, event) => {
    const elementId = event.target.id;
    const value = event.target.value;
    setExperience(draft => {
      const item = draft.find(item => item.id === id);
      const field = item.fields.find(
        subItem => subItem.id === elementId,
      );
      if (!field) {
        return;
      } else {
        field.value = value;
      }
    });
  };

  const onExperienceDateHandler = (id, event) => {
    const elementId = event.target.id;
    const value = event.target.value;
    setExperience(draft => {
      const item = draft.find(item => item.id === id);
      const field = item.date.find(
        subItem => subItem.id === elementId,
      );
      if (!field) {
        return;
      } else {
        field.value = value;
      }
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
      if (highlight) {
        highlight.value = value;
      } else {
        return;
      }
    });
  };

  const onAddExperienceHighlightHandler = id => {
    setExperience(draft => {
      const item = draft.find(item => item.id === id);
      if (item) {
        item.highlights.push({
          component: 'highlight',
          label: 'Additional highlight',
          id: uuidv4(),
          type: 'text',
          button: [
            {
              component: 'button',
              id: uuidv4(),
              type: 'button',
              label: '+ Add another',
            },
          ],
        });
      } else {
        return;
      }
    });
  };

  const onAddExperienceHandler = () => {
    setExperience(draft => {
      draft.push({
        component: 'experience',
        id: uuidv4(),
        label: 'Experience',
        date: [
          {
            component: 'date',
            label: 'Start date',
            type: 'date',
            id: uuidv4(),
            value: '',
          },
          {
            component: 'date',
            label: 'End date',
            type: 'date',
            id: uuidv4(),
            value: '',
          },
        ],
        highlights: [
          {
            component: 'highlight',
            label: 'Experience highlight',
            id: uuidv4(),
            type: 'text',
            value: '',
            button: [
              {
                component: 'button',
                id: uuidv4(),
                type: 'button',
                label: '+ Add another',
              },
            ],
          },
        ],
        fields: [
          {
            component: 'text',
            label: 'Position',
            type: 'text',
            id: uuidv4(),
            value: '',
          },
          {
            component: 'text',
            label: 'Company',
            type: 'text',
            id: uuidv4(),
            value: '',
          },
          {
            component: 'text',
            label: 'Location',
            type: 'text',
            id: uuidv4(),
            value: '',
          },
        ],
      });
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
      if (!item) {
        return;
      } else {
        item[name] = value;
      }
    });
  };

  const onEducationDateHandler = (id, event) => {
    const elementId = event.target.id;
    const value = event.target.value;
    setEducation(draft => {
      const item = draft.find(item => item.id === id);
      const field = item.date.find(
        subItem => subItem.id === elementId,
      );
      if (!field) {
        return;
      } else {
        field.value = value;
      }
    });
  };

  const onAddEducationHandler = () => {
    setEducation(draft => {
      draft.push({
        component: 'education',
        id: uuidv4(),
        label: 'Education',
        date: [
          {
            component: 'date',
            label: 'Start date',
            type: 'date',
            id: uuidv4(),
            value: '',
          },
          {
            component: 'date',
            label: 'End date',
            type: 'date',
            id: uuidv4(),
            value: '',
          },
        ],
        highlights: [
          {
            component: 'highlight',
            label: 'Education highlight',
            id: uuidv4(),
            type: 'text',
            value: '',
            button: [
              {
                component: 'button',
                id: uuidv4(),
                type: 'button',
                label: '+ Add another',
              },
            ],
          },
        ],
        fields: [
          {
            component: 'text',
            label: 'Area of study',
            type: 'text',
            id: uuidv4(),
            value: '',
          },
          {
            component: 'text',
            label: 'School',
            type: 'text',
            id: uuidv4(),
            value: '',
          },
          {
            component: 'text',
            label: 'Location',
            type: 'text',
            id: uuidv4(),
            value: '',
          },
        ],
      });
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

  const onAddEducationHighlightHandler = id => {
    setEducation(draft => {
      const item = draft.find(item => item.id === id);
      if (item) {
        item.highlights.push({
          component: 'highlight',
          label: 'Additional highlight',
          id: uuidv4(),
          type: 'text',
          button: [
            {
              component: 'button',
              id: uuidv4(),
              type: 'button',
              label: '+ Add another',
            },
          ],
        });
      } else {
        return;
      }
    });
  };

  const onSkillTypeHandler = (event) => {
    const elementId = event.target.id; //skillTypeId
    const value = event.target.value;
    setSkills(draft => {
      const skillType = draft.find(item => item.id === elementId);
      skillType.value = value;
      console.log(`${skillType.value}-skill-type`)
    })
  };

  const onSkillsNameChangeHandler = (skillId, event) => {
    const elementId = event.target.id;
    const value = event.target.value;
    setSkills(draft => {
      const skillType = draft.find(item => item.id === skillId);
      const skillName = skillType.fields.find(
        subitem => subitem.id === elementId,
      );
      skillName.value = value;
      console.log(`${skillName.value}-skillname`);
    })
  };

  const onAddSkillNameHandler = (skillId) => {
    setSkills(draft => {
      const skillType = draft.find(
        item => item.id === skillId,
      );
      skillType.fields.push({
        component: 'skill-name',
        id: uuidv4(),
        type: 'text',
        label: 'Skill name',
        button: {
          id: uuidv4(),
          type: 'button',
          label: '+ Add another',
        },
        level: {
          component: 'skill-level',
          id: uuidv4(),
          type: 'text',
          label: 'Level',
          graph: false,
          button: {
            id: uuidv4(),
            type: 'button',
            label: 'Graph it',
          },
        },
      });
    });
  };

  const onGraphButtonHandler = (skillId, nameId) => {
    setSkills(draft => {
      const skillType = draft.find(item => item.id === skillId);
      const skillName = skillType.fields.find(
        subItem => subItem.id === nameId,
        );
        console.log(skillName)
      skillName.level['isGraph'] = !skillName.level['isGraph'];
      console.log(skillName.level['isGraph'])
    });
  };

  const onSkillsLevelChangeHandler = (skillId, nameId, event) => {
    const value = event.target.value;
    setSkills(draft => {
      const skillType = draft.find(item => item.id === skillId);
      const skillName = skillType.fields.find(
        subItem => subItem.id === nameId,
      );
      skillName.level['value'] = value;
      console.log(`${skillName.level['value']}-skill-level`)
    });
  };

  const onAddSkillFormHandler = () => {
    setSkills(prevSkills =>
      [...prevSkills, {
        component: 'skill-type',
        id: uuidv4(),
        type: 'text',
        label: 'Skill category',
        fields: [
          {
            component: 'skill-name',
            id: uuidv4(),
            type: 'text',
            label: 'Skill name',
            button: {
              id: uuidv4(),
              type: 'button',
              label: '+ Add another',
            },
            level: {
              component: 'skill-level',
              id: uuidv4(),
              type: 'text',
              label: 'Level',
              isGraph: false,
              button: {
                id: uuidv4(),
                type: 'button',
                label: 'Graph it',
              },
            },
          },
        ],
      }],
    );
  };

  const onDeleteSkillFormHandler = skillId => {
    if (skills.length === 1) {
      return;
    }
    setSkills(draft => draft.filter(item => item.id !== skillId));
  };

    
  return (
    <div className='parent'>
      <EditResume
        id='edit-resume'
        onPersonal={onPersonalHandler}
        onProfile={onProfileHandler}
        onExperience={onExperienceHandler}
        onExperienceDate={onExperienceDateHandler}
        onExperienceHighlight={onExperienceHighlightHandler}
        onAddExperienceHighlight={onAddExperienceHighlightHandler}
        onAddExperience={onAddExperienceHandler}
        onDeleteExperience={onDeleteExperienceHandler}
        onEducation={onEducationHandler}
        onEducationDate={onEducationDateHandler}
        onAddEducation={onAddEducationHandler}
        onAddEducationHighlight={onAddEducationHighlightHandler}
        onDeleteEducation={onDeleteEducationHandler}
        onEducationHighlight={onEducationHighlightHandler}
        onSkillsNameChange={onSkillsNameChangeHandler}
        onSkillsLevelChange={onSkillsLevelChangeHandler}
        onAddSkillName={onAddSkillNameHandler}
        onSkillType={onSkillTypeHandler}
        onAddSkillForm={onAddSkillFormHandler}
        onDeleteSkillForm={onDeleteSkillFormHandler}
        onGraphButton={onGraphButtonHandler}
        experience={experience}
        education={education}
        skills={skills}
      />
      <Card className={'resume'}>
        <ShowResume
          id='show-resume'
          personal={personal}
          profile={profile}
          experience={experience}
          education={education}
          skills={skills}
        />
      </Card>
    </div>
  );
};

export default App;
