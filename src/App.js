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
          label: 'School name',
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
    },
  ]);
  const [skills, setSkills] = useImmer([
    {
      component: 'skill',
      id: uuidv4(),
      fields: [
        {
          component: 'skill-type',
          id: `skill-type-${uuidv4()}`,
          type: 'text',
          button: false,
          value: '',
        },
        {
          component: 'skill-name',
          id: `skill-name-${uuidv4()}`,
          type: 'text',
          button: true,
          buttonId: `skill-button-${uuidv4()}`,
          buttonType: 'button',
          buttonLabel: '+ Add another',
          value: '',
        },
        {
          component: 'skill-level',
          id: `skill-level-${uuidv4()}`,
          type: 'text',
          button: true,
          buttonId: `skill-level-${uuidv4()}`,
          buttonType: 'button',
          buttonLabel: 'Graph it',
          value: '',
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
    const name = event.target.name;
    const value = event.target.value;
    setExperience(draft => {
      const item = draft.find(item => item.id === id);
      if (!item) {
        return;
      } else {
        item[name] = value;
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
      if (!highlight) {
        item.highlights.push({
          component: 'highlight',
          label: 'Additional highlight',
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
        });
      } else {
        highlight.text = value;
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
            label: 'School name',
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

  const onSkillsHandler = (id, event) => {
    const elementId = event.target.id;
    const value = event.target.value;
    setSkills(draft => {
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
