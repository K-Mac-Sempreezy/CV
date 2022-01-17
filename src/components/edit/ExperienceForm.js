import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import DatePicker from '../elements/FormElements/DatePicker';
import SectionForm from '../elements/FormElements/SectionForm';
import AddDeleteButtons from '../elements/FormElements/AddDeleteButtons';
import AdditionalHighlight from '../elements/FormElements/AdditionalHighlight';
import './ExperienceForm.css';

const ExperienceForm = props => {
  const [highlightList, setHighlightList] = useState([]);

  const onAddInputHandler = num => {
    setHighlightList(prevList => [
      ...prevList,
      { id: `experience-${highlightList.length}` },
    ]);
  };

  const onHighlightDeleteHandler = () => {
    
  };

  const onHighlightChangeHandler = () => {
    
  };

  useEffect(() => {
    if (highlightList.length > 0) {
      console.log(highlightList)
    }
  }, [highlightList])



  return (
    <div className='experience'>
      <DatePicker />
      <SectionForm
        title={'Job Title'}
        establishment={'Company Name'}
        highlight={'Experience highlight'}
        onAddInput={onAddInputHandler}
      />
      {
        <ul>
          {highlightList.length > 0
            ? highlightList.map(item => (
                <AdditionalHighlight
                  key={uuidv4()}
                  id={item.id}
                  placeholder={'Additional highlight'}
                  containerClass={'experience__additional'}
                  inputClass={'experience__input'}
                  buttonClass={'experience__button'}
                  onDelete={onHighlightDeleteHandler}
                  onChange={onHighlightChangeHandler}
                />
              ))
            : null}
        </ul>
      }
      <AddDeleteButtons />
    </div>
  );
};

export default ExperienceForm;
