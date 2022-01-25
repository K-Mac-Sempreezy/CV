import React from 'react';

import AddDeleteButtons from '../elements/FormElements/AddDeleteButtons';
import './LongForm.css';

const LongForm = props => {
  const {
    onChange,
    onHighlight,
    onDelete,
    onAdd,
    id,
    elementItem,
  } = props;

  const onChangeHandler = event => {
    onChange(event);
  };

  const onHighlightHandler = (event) => {
    onHighlight(id, event);
  };

  const onDeleteHandler = () => {
    onDelete(id);
  };

  const onAddHandler = () => {
    onAdd();
  };

  return (
    <div className='long'>
      <div className='long-date'>
        {elementItem.date
          ? elementItem.date.map((item, index) => (
              <div className='long-date__single'>
                <label htmlFor={item.id}>{item.label}</label>
                <input
                  key={item.id}
                  id={item.id}
                  type={item.type}
                  name={item.label}
                  value={item.value}
                  onChange={onChangeHandler}
                />
              </div>
            ))
          : null}
      </div>
      <div className='long-fields'>
        {elementItem.fields
          ? elementItem.fields.map((item, index) => (
              <input
                key={item.id}
                id={item.id}
                type={item.type}
                name={item.label}
                placeholder={item.label}
                value={item.value}
                onChange={onChangeHandler}
              />
            ))
          : null}
        <React.Fragment>
          {elementItem.highlights
            ? elementItem.highlights.map((item, index) => (
                <div className='long-highlight'>
                  <input
                    key={item.id}
                    id={item.id}
                    type={item.type}
                    value={item.value}
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
                          onClick={onHighlightHandler}
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
