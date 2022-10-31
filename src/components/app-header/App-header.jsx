import React from 'react';
import './app-header.css'

const AppHeader = ({doneCounter,toDoCounter}) => {
    return (
        <div className={'app-header'}>
           <h1>TODO LIST</h1>
            <h2> <span>{toDoCounter}</span> to do,
                <span>{doneCounter}</span>done </h2>
        </div>
    );
};

export default AppHeader;