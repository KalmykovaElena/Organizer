import React from 'react';
import './todo-list-item.css'


class TodoListItem extends React.Component {

    render() {
        const important=this.props.important
        const done=this.props.done

        let style = 'todoItem'
        if(important){
            style+=' important'
        }
       if (done){
           style+=' done'
       }
        return (<span className={style}>
        <span className={style} onClick={this.props.setDone} >
            {this.props.label}
        </span>
                <span>
       <button className={'removeButton'} onClick={this.props.onRemove}>   </button>
       <button className={'canselButton'} onClick={this.props.setImportant}></button>
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