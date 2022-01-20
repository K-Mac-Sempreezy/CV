import React from 'react';

import AddDeleteButtons from '../elements/FormElements/AddDeleteButtons';
import DatePicker from '../elements/FormElements/DatePicker';
import SectionForm from '../elements/FormElements/SectionForm';
import './EducationForm.css';

const EducationForm = props => {

  const { onStartDate, onEndDate } = props;

  // const onAddInputHandler = num => {
  //   setHighlightList(prevList => [
  //     ...prevList,
  //     { id: `education-${uuidv4()}`, inputValue: '' },
  //   ]);
  // };

  // const onHighlightChangeHandler = (id, value) => {
  //   setHighlightList(prevList => {
  //     return prevList.map(item => {
  //       return item.id === id ? { ...item, inputValue: value } : item;
  //     });
  //   });
  // };

  const startDateHandler = startDate => {
    onStartDate(startDate);
  };

  const endDateHandler = endDate => {
    onEndDate(endDate);
  };

  return (
    <div className='education'>
      <DatePicker
        onStartDate={startDateHandler}
        onEndDate={endDateHandler}
      />
      <SectionForm
        position={'Area of Study'}
        establishment={'School Name'}
      />
      <div className='education__highlight'>
        <input
          id={`ed-highlight-1-${props.id}`}
          type='text'
          placeholder={'Add education highlight'}
          // onChange={onHighlightChangeHandler}
        />
        <input
          id={`ed-highlight-2-${props.id}`}
          type='text'
          placeholder={'Optional highlight'}
          // onChange={onHighlightChangeHandler}
        />
        <input
          id={`ed-highlight-3-${props.id}`}
          type='text'
          placeholder={'Optional highlight'}
          // onChange={onHighlightChangeHandler}
        />
      </div>
      <AddDeleteButtons add={'Add'} delete={'Delete'} />
    </div>
  );
};

export default EducationForm;
