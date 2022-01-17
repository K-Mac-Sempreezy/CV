import React, { useState, useEffect } from 'react';
import {v4 as uuidv4} from 'uuid';

import AddDeleteButtons from '../elements/FormElements/AddDeleteButtons';
import DatePicker from '../elements/FormElements/DatePicker';
import SectionForm from '../elements/FormElements/SectionForm';
import AdditionalHighlight from '../elements/FormElements/AdditionalHighlight';
import './EducationForm.css';

const EducationForm = props => {
  const [highlightList, setHighlightList] = useState([]);

  const { onStartDate, onEndDate } = props;

  const onAddInputHandler = num => {
    setHighlightList(prevList => [
      ...prevList,
      { id: `experience-${highlightList.length}` },
    ]);
  };

  const onHighlightDeleteHandler = () => {};

  const onHighlightChangeHandler = () => {};

  
  const startDateHandler = startDate => {
    onStartDate(startDate);
  };
  
  const endDateHandler = endDate => {
    onEndDate(endDate);
  };

  useEffect(() => {
    if (highlightList.length > 0) {
      console.log(highlightList);
    }
  }, [highlightList]);

  return (
    <div className='education'>
      <DatePicker
        onStartDate={startDateHandler}
        onEndDate={endDateHandler}
      />
      <SectionForm
        title={'Area of Study'}
        establishment={'School Name'}
        highlight={'Education highlight'}
        onAddInput={onAddInputHandler}
      />
      {highlightList.length > 0
        ? highlightList.map(item => (
            <AdditionalHighlight
              key={uuidv4()}
              id={item.id}
              placeholder={'Additional highlight'}
              containerClass={'education__additional'}
              inputClass={'education__input'}
              buttonClass={'education__button'}
              onDelete={onHighlightDeleteHandler}
              onChange={onHighlightChangeHandler}
            />
          ))
        : null}
      <AddDeleteButtons add={'Add'} delete={'Delete'} />
    </div>
  );
};

export default EducationForm;
