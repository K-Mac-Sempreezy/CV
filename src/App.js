import React from 'react';

import ShowResume from './components/visual/ShowResume';
import EditResume from './components/edit/EditResume';
import Card from './components/UIElements/Card';

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
