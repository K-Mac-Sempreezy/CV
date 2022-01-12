import React from 'react';

import Icon from '../ui-elements/icon';
import DateLocation from './date-location';
import Title from './title';
import Subtitle from './subtitle';
// import BulletPoint from './bullet-point';
import Experience from './experience';
import './show-resume.css';

const ShowResume = props => {
  return (
    <main className='show'>
      <div className='show__top'></div>
      <h2 className='show__name'>Show Resume Side</h2>
      <section className='show__contact'>
        <div>Address</div>
        <div>|</div>
        <div>Phone</div>
        <div>|</div>
        <div>Email</div>
      </section>
      <hr className='divider__horz' />
      <section className='show__block'>
        <div className='show__block-left'>
          <div className='show__profile'>
            <Icon>Profile Icon</Icon>
            <div>Profile</div>
            <div>
              Results-driven and motivated Software Engineer with
              demonstrated expnn improvin software pertormance,
              testing and updating existing software, and developing
              new software functionalities. Offers proven track record
              of extraordinary achievements, strong attention to
              detail, and ability to finish projects on schedule and
              within budget.
            </div>
          </div>
          <div className='show__experience'>
            <div>
              <Icon>Experience Icon</Icon>
              <div>Work Experience</div>
            </div>
            <Experience
              date={props.date}
              location={props.location}
              title={props.title}
              subtitle={props.subtitle}
              text={
                'Developed and implemented tools which increased the level of automation and efficiency of installing and configuring servers.'
              }
            />
            {/* <div>
                <DateLocation>
                  06/2017 - 03/2019 STUTTGART, GERMANY
                </DateLocation>
                <Title>Software Engineer</Title>
                <Subtitle>Critical Alert, Inc.</Subtitle>
                <BulletPoint>
                  Developed and implemented tools which increased the
                  level of automation and efficiency of installing and
                  configuring servers.
                </BulletPoint>
              </div> */}
          </div>
        </div>
        <hr className='divider__vert' />
        <div className='show__block-right'>
          <div className='show__education'>
            <div>
              <Icon>Education Icon</Icon>
              <div>Education</div>
              <DateLocation>Date/Location</DateLocation>
              <Title>Degree Title</Title>
              <Subtitle>School Name</Subtitle>
            </div>
          </div>
          <div className='show__skills'>
            <div>
              <Icon>Skills Icon</Icon>
              <div>Skills</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ShowResume;
