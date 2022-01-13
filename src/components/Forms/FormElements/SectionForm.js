import React from 'react';

import HighlightInput from './HighlightInput';
import DeleteAddButtons from '../../UIElements/buttons/DeleteAddButtons';
import './SectionForm.css';

const SectionForm = props => {
  return (
    <React.Fragment>
      <div className='form'>
        <input type='text' placeholder={props.title} />
        <input type='text' placeholder={props.establishment} />
        <HighlightInput placeholder={props.highlight}/>
      </div>
      <DeleteAddButtons />
    </React.Fragment>
  );
};

export default SectionForm;