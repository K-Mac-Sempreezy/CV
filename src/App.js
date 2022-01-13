import React from 'react';

import ShowResume from './components/visual/show-resume';
import EditResume from './components/edit/edit-resume';
import Card from './components/UIElements/card';

import './App.css'


const App = props => {
  return (
    <div className='parent'>
      <EditResume />
      <Card className={'resume'}>
        <ShowResume />
      </Card>
    </div>
  );
};

export default App;
