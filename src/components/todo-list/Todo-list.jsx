import React from 'react';
import TodoListItem from "../todo-list-item";
import './todo-list.css'

class TodoList extends React.Component {

    render() {
        const elements = this.props.items.map((item,index) => {
            return (<li className={'todoListItem'} key={item.id}>
                <TodoListItem
                    label={item.label} onRemove={() => this.props.onRemove(item.id)}
                    setImportant={()=>this.props.changeImportant(index)}
                    setDone={()=>this.props.changeDone(index)}
                    important={item.important}  done={item.done}
                        />
            </li>)
        })

            if(elements.length===0){
                return null
            }else {
                return ( <ul className={'todoList'}>
                    {elements}
                </ul>
                );
            }

    }
};

export default TodoList;