import React from 'react';
import TodoList from '../todo-list';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemAddForm from '../item-add-form';
import ItemStatusFilter from '../item-status-filter/Item-status-filter';
import './app.css';

const App = () => {
  return (
    <div className={'app'}>
      <AppHeader />
      <SearchPanel />
      <ItemStatusFilter />
      <TodoList />
      <ItemAddForm />
    </div>
  );
};

export default App;
