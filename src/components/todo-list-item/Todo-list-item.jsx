import React from 'react';
import './todo-list-item.css';

const TodoListItem = ({
  label,
  onRemove,
  done,
  important,
  setImportant,
  setDone,
}) => {
  let style = 'todoItem';
  if (important) {
    style += ' important';
  }
  if (done) {
    style += ' done';
  }

  return (
    <span className={style}>
      <span className={style} onClick={setDone}>
        {label}
      </span>
      <span className={'buttonsWrapper'}>
        <button className={'removeButton'} onClick={onRemove}>
          {' '}
        </button>
        <button className={'canselButton'} onClick={setImportant}></button>
      </span>
    </span>
  );
};

export default TodoListItem;
