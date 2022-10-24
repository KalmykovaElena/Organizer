import React from 'react';


class TodoListItem extends React.Component{

    render(){

        return(<span>
        <span>
            Название таски
        </span>
       <button onClick={this.props.onRemove}>Удалить</button>
       <button>Отметить</button>
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