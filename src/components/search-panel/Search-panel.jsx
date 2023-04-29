import React, { useState } from 'react';

const SearchPanel=({setSearchText})=> {
    const [search, setSearch]= useState('')
    const onchangeSearch = (e) => {
        setSearch(e.target.value)
        setSearchText(e.target.value)
    }

        return (
            <input type='text'
                   value={search}
                   onChange={onchangeSearch}
            />
        )
};

export default SearchPanel;