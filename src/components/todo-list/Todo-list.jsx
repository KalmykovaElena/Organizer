import React from 'react';

import './todo-list.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  setItems,
  toggleDone,
  toggleImportant,
} from '../../redux/redusers/todoReduser';
import TodoListItem from '../todo-list-item/Todo-list-item';

const TodoList = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.todo.items);
  const filter = useSelector((state) => state.todo.filter);
  const searchText = useSelector((state) => state.todo.searchText);

  const onSearchChange = (items, search) => {
    if (search.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(search.toLowerCase()) > -1;
    });
  };

  const filterItems = (items, filter) => {
    switch (filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter((item) => !item.done);
      case 'done':
        return items.filter((item) => item.done);
      case 'important':
        return items.filter((item) => item.important);
      default:
        return items;
    }
  };
  const onRemove = (id) => {
    const index = items.findIndex((item) => item.id === id);
    const newItems = [...items.slice(0, index), ...items.slice(index + 1)];
    dispatch(setItems(newItems));
  };
  const visibleItems = onSearchChange(filterItems(items, filter), searchText);
  
  const elements = visibleItems.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li className={'todoListItem'} key={id}>
        <TodoListItem
          {...itemProps}
          onRemove={() => onRemove(id)}
          setImportant={() => dispatch(toggleImportant(id))}
          setDone={() => dispatch(toggleDone(id))}
        />
      </li>
    );
  });

  if (elements.length === 0) {
    return (
      <div className={'emptyList'}>
        <span>
          task-list <br />
          is empty
        </span>
      </div>
    );
  } else {
    return <ul className={'todoList'}>{elements}</ul>;
  }
};

export default TodoList;
