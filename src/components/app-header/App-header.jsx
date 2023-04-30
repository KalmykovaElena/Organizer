import React from 'react';
import './app-header.css';
import { useSelector } from 'react-redux';

const AppHeader = () => {
  const items = useSelector((state) => state.todo.items);
  const doneCounter = items.filter((item) => item.done).length;
  const toDoCounter = items.length - doneCounter;
  
  return (
    <div className={'app-header'}>
      <h1>TODO LIST</h1>
      <h2>
        <span>{toDoCounter}</span> to do,
        <span>{doneCounter}</span>done
      </h2>
    </div>
  );
};

export default AppHeader;
