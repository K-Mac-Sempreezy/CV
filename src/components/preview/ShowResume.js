import React from 'react';

import Experience from './Experience';
import Education from './Education';
import SectionHeading from './SectionHeading';
import Profile from './Profile';
import Contact from './Contact';
import './ShowResume.css';
import Applicant from './Applicant';

const ShowResume = props => {
  const {
    applicant__firstName,
    applicant__lastName,
    applicant__address,
    applicant__phone,
    applicant__email,
    applicant__jobTitle,
  } = props.data;

  const DUMMY_PROFILE =
    'Results-driven and motivated Software Engineer with a demonstrated experience in improving software pertormance, testing and updating existing software, and developing new software functionalities. Offers proven track record of extraordinary achievements, strong attention to detail, and ability to finish projects on schedule and within budget.';
  const DUMMY_EXPERIENCE =
    'Developed and implemented tools which increased the level of automation and efficiency of installing and configuring servers.';

  return (
    <main className='show'>
      <div className='show__top'></div>
      <Applicant
        firstName={applicant__firstName}
        lastName={applicant__lastName}
        jobTitle={applicant__jobTitle}
      />
      <Contact
        address={applicant__address}
        phone={applicant__phone}
        email={applicant__email}
      />
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
            bullet={DUMMY_EXPERIENCE}
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
      <hr className='divider__horz' />
    </main>
  );
};

export default ShowResume;
