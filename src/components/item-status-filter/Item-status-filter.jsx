import React from 'react';
import './item-status-filter.css'
const filterButtons = [
    {name: 'all', label: 'All'},
    {name: 'active', label: 'Active'},
    {name: 'done', label: 'Done'},
    {name: 'important', label: 'Important'}
]

const ItemStatusFilter = ({onFilter,isActive}) => {
    const buttons = filterButtons.map((e) => {
        return <button key={e.name} className={isActive===e.name?'active':null}
        onClick={()=>onFilter(e.name)}
        >{e.label}</button>
    })
    return (
        <span className={'statusFilterButtons'}>
            {buttons}
        </span>
    );
};

export default ItemStatusFilter;