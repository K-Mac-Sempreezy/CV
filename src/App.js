import React, { useState } from 'react';

import ShowResume from './components/preview/ShowResume';
import EditResume from './components/edit/EditResume';
import Card from './components/elements/UIElements/Card';

import './App.css';

const App = props => {
  const [resumeData, setResumeData] = useState({});

  const onDataHandler = (key, value) => {
    setResumeData(prevResumeData => ({
      ...prevResumeData,
      [key]: value,
    }));
  };

  console.log(resumeData)

  return (
    <div className='parent'>
      <EditResume
        onData={onDataHandler}
      />
      <Card className={'resume'}>
        <ShowResume data={resumeData} />
      </Card>
    </div>
  );
};

export default App;
