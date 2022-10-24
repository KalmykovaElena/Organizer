import React from 'react';
import './ToDoItem.css'
import deleteIcon from '../../assets/free-icon-bin-5376772.png'
import icon from '../../assets/bluewarningexclamationmark_azul_advertenci_12454.png'

const ToDoItem = () => {
    return (
        <div className={'toDoItem'}>
            <div className="toDoItem-value">
                Название задачи
            </div>

            <div className={'toDoItem-controls'}>
                <button><img src={deleteIcon} alt={'delete'}/></button>
                <button ><img src={icon} alt={'edit'}/></button>
            </div>
        </div>
    );
};

export default ToDoItem;