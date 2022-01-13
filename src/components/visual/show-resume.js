import React from 'react';

import Experience from './experience';
import Education from './education';
import SectionHeading from './section-heading';
import Profile from './profile';
import Contact from './contact';
import './show-resume.css';
import Applicant from './applicant';

const ShowResume = props => {
  const DUMMY_PROFILE =
    'Results-driven and motivated Software Engineer with a demonstrated experience in improving software pertormance, testing and updating existing software, and developing new software functionalities. Offers proven track record of extraordinary achievements, strong attention to detail, and ability to finish projects on schedule and within budget.';
  const DUMMY_EXPERIENCE =
    'Developed and implemented tools which increased the level of automation and efficiency of installing and configuring servers.';

  return (
    <main className='show'>
      <div className='show__top'></div>
      <Applicant firstName={'Kristian'} lastName={'MacSempreezy'} title={'Software Engineer'} />
      <Contact address={'Address'} phone={'Phone'} email={'Email'} />
      <hr className='divider__horz' />
      <section className='show__info'>
        <div className='show__info-left'>
          <SectionHeading icon={'profile'} section={'Profile'} />
          <Profile text={DUMMY_PROFILE} />
          <SectionHeading
            icon={'experience'}
            section={'Work Experience'}
          />
          <Experience
            date={'06/2017 - 03/2019'}
            location={'STUTTGART, GERMANY'}
            title={'Software Engineer'}
            name={'Critical Alert, Inc.'}
            text={DUMMY_EXPERIENCE}
          />
        </div>
        <hr className='divider__vert' />
        <div className='show__info-right'>
          <div className='show__education'>
            <SectionHeading
              icon={'education'}
              section={'Education'}
            />
            <Education
              date={'09/2014 - 05/2015'}
              location={'OXFORD, UNITED KINGDOM'}
              title={'Software Engineer'}
              name={'University of Oxford'}
              highlights={'Highlights'}
            />
          </div>
          <div className='show__skills'>
            <SectionHeading icon={'skills'} section={'Skills'} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ShowResume;
