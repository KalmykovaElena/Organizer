import React from 'react';
import TodoListItem from "../todo-list-item";
import './todo-list.css'

class TodoList extends React.Component {

    render() {
        const elements = this.props.items.map(item => {
            return (<li className={'todoListItem'} key={item.id}>
                <TodoListItem

                    label={item.label} onRemove={() => this.props.onRemove(item.id)}

                />
            </li>)
        })
        return (
            <ul className={'todoList'}>
                {elements}
            </ul>
        );
    }
};

export default TodoList;