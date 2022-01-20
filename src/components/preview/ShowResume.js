import React from 'react';

import Experience from './Experience';
import Education from './Education';
import SectionHeading from './SectionHeading';
import Profile from './Profile';
import Contact from './Contact';
import BulletPoint from './BulletPoint';
import Applicant from './Applicant';
import './ShowResume.css';

const ShowResume = props => {
  const {
    personal,
    profile,
    experience,
    education,
    // skills
  } = props;

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
          {experience.map(item => (
            <Experience
              key={item.id}
              id={item.id}
              startDate={item.startDate || ''}
              endDate={item.endDate || ''}
              location={item.location || ''}
              establishment={item.establishment}
              title={item.title || ''}
              name={item.name || ''}
              bullets={item.highlights}
            />
          ))}
        </div>
        <hr className='divider__vert' />
        <div className='show__info-right'>
          <div className='show__education'>
            <SectionHeading
              icon={'education'}
              section={'Education'}
            />
            {education.map(item => (
              <Education
                key={item.id}
                id={item.id}
                startDate={item.startDate}
                endDate={item.endDate}
                location={item.location}
                establishment={item.establishment}
                title={item.title}
                name={item.name}
              >
                {item.highlights.length > 0
                  ? item.highlights.map((subItem, index) => (
                      <BulletPoint
                        key={subItem.id || index}
                        id={subItem.id || `edhlt-${index}`}
                        text={subItem.text || ''}
                      />
                    ))
                  : null}
              </Education>
            ))}
          </div>
          <div className='show__skills'>
            <SectionHeading icon={'skills'} section={'Skills'} />
          </div>
        </div>
      </section>
      <hr className='divider__horz' />
    </main>
  );
};

export default ShowResume;
