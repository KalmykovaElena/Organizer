import React from 'react';
import './Input.css'

const InputItem = ({description}) => {
    return (
        <div>
            <input className={'inputItem'} type="text" placeholder={description}/>
        </div>
    );
};

export default InputItem;