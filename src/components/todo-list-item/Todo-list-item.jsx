import React from 'react';
import './todo-list-item.css'


class TodoListItem extends React.Component {
state={
    done:false,
    important:false
}
onToggleDone=()=>{
    this.setState((state)=>{
        return{
            done:!state.done
        }
    })
}
    onToggleImportant=()=>{
        this.setState((state)=>{
            return{
                important:!state.important
            }
        })
    }
    render() {
const {done,important}=this.state
        let style = 'todoItem'
        if(important){
            style+=' important'
        }
       if (done){
           style+=' done'
       }
        return (<span className={style}>
        <span className={style} onClick={this.onToggleDone} >

            {this.props.label}
        </span>
                <span>
       <button className={'removeButton'} onClick={this.props.onRemove}>   </button>
       <button className={'canselButton'} onClick={this.onToggleImportant}></button>
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