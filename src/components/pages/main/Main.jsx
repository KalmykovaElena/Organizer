import React from 'react';

import './main.css';
import { withHeaderHoc } from '../../hoc/withHeaderHoc';
import AppHeader from '../../app-header/App-header';
import SearchPanel from '../../search-panel/Search-panel';
import TodoList from '../../todo-list/Todo-list';
import ItemAddForm from '../../item-add-form/Item-add-form';
import ItemStatusFilter from '../../item-status-filter/Item-status-filter';

const Main = () => {
  return (
    <div className={'main'}>
      <AppHeader />
      <SearchPanel />
      <ItemStatusFilter />
      <TodoList />
      <ItemAddForm />
    </div>
  );
};

export default withHeaderHoc(Main);
