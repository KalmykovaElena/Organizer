import React from 'react';
import './todo-list-item.css'


const TodoListItem =(
    {label,
        onRemove,
        done,
        important,
        setImportant,
        setDone}
)=> {

    let style = 'todoItem'
        if(important){
            style+=' important'
        }
       if (done){
           style+=' done'
       }

    return (<span className={style}>
        <span className={style} onClick={setDone} >
            {label}
        </span>
                <span>
       <button className={'removeButton'} onClick={onRemove}>   </button>
       <button className={'canselButton'} onClick={setImportant}></button>
             </span>
            </span>

    )
// {
//         const important=this.props.important
//         const done=this.props.done
//
//         let style = 'todoItem'
//         if(important){
//             style+=' important'
//         }
//        if (done){
//            style+=' done'
//        }
//
//     }
}



export default TodoListItem;