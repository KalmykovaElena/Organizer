import React from 'react';
import './item-status-filter.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/redusers/todoReduser';

const filterButtons = [
  { name: 'all', label: 'All' },
  { name: 'active', label: 'Active' },
  { name: 'done', label: 'Done' },
  { name: 'important', label: 'Important' },
];

const ItemStatusFilter = () => {
  const activeButton = useSelector((state) => state.todo.filter);
  const dispatch = useDispatch();
  const onFilterChange = (filterName) => {
    dispatch(setFilter(filterName));
  };
  const buttons = filterButtons.map((e) => {
    return (
      <button
        key={e.name}
        className={activeButton === e.name ? 'active' : null}
        onClick={() => onFilterChange(e.name)}
      >
        {e.label}
      </button>
    );
  });

  return <span className={'statusFilterButtons'}>{buttons}</span>;
};

export default ItemStatusFilter;
