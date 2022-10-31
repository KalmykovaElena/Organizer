import React from 'react';
import TodoListItem from "../todo-list-item";
import './todo-list.css'

const TodoList=({items,onRemove,changeImportant,changeDone})=>{
 {
        const elements = items.map((item) => {
            const {id,...itemProps}=item
            return (<li className={'todoListItem'} key={id}>
                <TodoListItem
                    {...itemProps}
                    onRemove={() => onRemove(id)}
                    setImportant={()=>changeImportant(id)}
                    setDone={()=>changeDone(id)}
                     />
            </li>)
        })

            if(elements.length===0){
                return <div className={'emptyList'}>task-list is empty</div>
            }else {
                return ( <ul className={'todoList'}>
                    {elements}
                </ul>
                );
            }

    }
};

export default TodoList;