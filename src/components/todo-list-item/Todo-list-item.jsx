import React from 'react';
import './todo-list-item.css'


class TodoListItem extends React.Component {

    render() {

        return (<span className={'todoItem'}>
        <span>
            {this.props.label}
        </span>
                <span>
       <button className={'removeButton'} onClick={this.props.onRemove}>   </button>
       <button className={'canselButton'}></button>
             </span>
            </span>

        )
    }
}

// const TodoListItem = () => {
//     return (<span>
//         <span>
//             Название таски
//         </span>
//        <button onClick={()=>}>Удалить</button>
//        <button>Отметить</button>
//              </span>
//     );
// };

export default TodoListItem;