import React from 'react';
import TodoList from "../todo-list";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemAddForm from "../item-add-form";
import ItemStatusFilter from "../item-status-filter/Item-status-filter";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            items: [
                {id: 1, label: 'Learn React'},
                {id: 2, label: 'Learn JS'},
                {id: 3, label: 'Learn React'},
            ]
        }
    }

    onRemove(id) {
        this.setState((state) => {
            const index = state.items.findIndex((item) => item.id === id)
            const newItems = [
                ...state.items.slice(0, index),
                ...state.items.slice(index + 1)
            ]
            return {
                items: newItems
            }
        })
    }

    render() {


        return (
            <div>
                <AppHeader/>
                <SearchPanel/>
                <ItemStatusFilter/>
                <TodoList items={this.state.items} onRemove={(id) => this.onRemove(id)}/>
                <ItemAddForm/>
            </div>
        );
    }
}

// const App = () => {
//     // создаем временный store
//     let items=[
//         {id:1,label:'Learn React'},
//         {id:2,label:'Learn JS'},
//         {id:3,label:'Learn React'}
//     ]
//     const onRemove=(id)=>{
// const newArray=items.filter(item=>item.id!==id)
//         items=newArray
//     }
//     return (
//         <div>
//             <AppHeader/>
//             <SearchPanel/>
//             <ItemStatusFilter/>
//             <TodoList items={items} onRemove={onRemove()}/>
//             <ItemAddForm/>
//         </div>
//     );
// };

export default App;