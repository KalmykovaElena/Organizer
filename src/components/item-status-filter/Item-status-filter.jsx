import React from 'react';

const filterButtons = [
    {name: 'all', label: 'All'},
    {name: 'active', label: 'Active'},
    {name: 'done', label: 'Done'},
    {name: 'important', label: 'Important'}
]

const ItemStatusFilter = ({onFilter}) => {
    const buttons = filterButtons.map((e) => {
        return <button key={e.name}
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