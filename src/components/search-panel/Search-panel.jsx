import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchText } from '../../redux/redusers/todoReduser';

const SearchPanel = () => {
  const dispatch = useDispatch();
  const searchText = useSelector((state)=>state.todo.searchText)
  
  return <input type='text' value={searchText} onChange={(e)=>dispatch(setSearchText(e.target.value))} />;
};

export default SearchPanel;
