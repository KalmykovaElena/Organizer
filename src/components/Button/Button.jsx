import React from 'react';
import './Button.css'

const Button = ({name,type}) => {
    return (
   <button className={'button '+  type}>{name}</button>
    );
};

export default Button;