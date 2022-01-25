import React from 'react';

import AddDeleteButtons from '../elements/FormElements/AddDeleteButtons';
import './LongForm.css';

const LongForm = props => {
  const { onDate, onChange, onHighlight, onAddHighlight, onDelete, onAdd, id, elementItem } =
    props;

  const onChangeHandler = event => {
    onChange(id, event);
  };

  const onDateHandler = event => {
    onDate(id, event)
  }

  const onHighlightHandler = event => {
    onHighlight(id, event);
  };

  const onAddHighlightHandler = () => {
    onAddHighlight(id);
  };

  const onDeleteHandler = () => {
    onDelete(id);
  };

  const onAddHandler = () => {
    onAdd();
  };

  return (
    <div className='long'>
      <div className='date'>
        {elementItem.date
          ? elementItem.date.map(item => (
              <div key={item.id} className='date__single'>
                <label htmlFor={item.id}>{item.label}</label>
                <input
                  id={item.id}
                  component={item.component}
                  type={item.type}
                  name={item.label}
                  onChange={onDateHandler}
                />
              </div>
            ))
          : null}
      </div>
      <div className='fields'>
        {elementItem.fields
          ? elementItem.fields.map(item => (
              <input
                key={item.id}
                id={item.id}
                component={item.component}
                type={item.type}
                name={item.label}
                placeholder={item.label}
                onChange={onChangeHandler}
              />
            ))
          : null}
        <React.Fragment>
          {elementItem.highlights
            ? elementItem.highlights.map(item => (
                <div key={item.id} className='highlight'>
                  <input
                    id={item.id}
                    type={item.type}
                    component={item.component}
                    name={item.label}
                    placeholder={item.label}
                    onChange={onHighlightHandler}
                  />
                  {item.button
                    ? item.button.map((subItem, index) => (
                        <button
                          key={subItem.id}
                          id={subItem.id}
                          type={subItem.type}
                          onClick={onAddHighlightHandler}
                        >
                          {subItem.label}
                        </button>
                      ))
                    : null}
                </div>
              ))
            : null}
        </React.Fragment>
      </div>
      <AddDeleteButtons
        id={id}
        onDelete={onDeleteHandler}
        onAdd={onAddHandler}
      />
    </div>
  );
};

export default LongForm;
