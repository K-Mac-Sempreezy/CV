import React from 'react';

import LongFormShow from './LongFormShow';
import SectionHeading from './SectionHeading';
import Profile from './Profile';
import Contact from './Contact';
import Applicant from './Applicant';
import SkillsSection from './SkillsSection';
import './ShowResume.css';

const ShowResume = props => {
  const { personal, profile, experience, education, skills } = props;

  return (
    <main className='show'>
      <div className='show__top'></div>
      <Applicant
        firstName={personal.applicant__firstName}
        lastName={personal.applicant__lastName}
        jobTitle={personal.applicant__jobTitle}
      />
      <Contact
        address={personal.applicant__address}
        phone={personal.applicant__phone}
        email={personal.applicant__email}
      />
      <hr className='divider__horz' />
      <section className='show__info'>
        <div className='show__info-left'>
          <SectionHeading icon={'profile'} section={'Profile'} />
          <Profile profile={profile} />
          <SectionHeading
            icon={'experience'}
            section={'Work Experience'}
          />
          {experience
            ? experience.map(item => (
                <LongFormShow
                  key={item.id}
                  id={item.id}
                  elementItem={item}
                />
              ))
            : null}
        </div>
        <hr className='divider__vert' />
        <div className='show__info-right'>
          <div className='show__education'>
            <SectionHeading
              icon={'education'}
              section={'Education'}
            />
            {education
              ? education.map(item => (
                  <LongFormShow
                    key={item.id}
                    id={item.id}
                    elementItem={item}
                  />
                ))
              : null}
          </div>
          <div className='show__skills'>
            <SectionHeading icon={'skills'} section={'Skills'} />
            {skills.map(item => ( //item === skill-type
              <SkillsSection
                key={item.id}
                id={item.id}
                skills={item}
              />
            ))}
          </div>
        </div>
      </section>
      <hr className='divider__horz' />
    </main>
  );
};

export default ShowResume;
