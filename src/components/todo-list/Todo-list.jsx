import React from 'react';
import TodoListItem from "../todo-list-item";
import './todo-list.css'

const TodoList = (props) => {

  const elements=  props.items.map(item=>{
        return (<li className={'todoListItem'} key={item.id} >
            <TodoListItem
               label={item.label} onRemove={()=>props.onRemove(item.id)}
            />
        </li>)
    })
    return (
        <ul className={'todoList'}>
            {elements}
        </ul>
    );
};

export default TodoList;