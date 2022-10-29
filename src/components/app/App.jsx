import React from 'react';
import TodoList from "../todo-list";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemAddForm from "../item-add-form";
import ItemStatusFilter from "../item-status-filter/Item-status-filter";
import './app.css'

class App extends React.Component {
    id = 4

    constructor() {
        super();
        this.state = {
            items: [
                {id: 1, label: 'Learn React'},
                {id: 2, label: 'Learn JS'},
                {id: 3, label: 'Learn Redux'},
            ],
            searchText: ''
        }
    }

    setSearchText = (text) => {
        this.setState({
            searchText: text
        })
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

    onItemAdd = (label) => {
       if(label) this.setState((state) => {
            const item = {id: ++this.id, label}
            return {
                items: [...state.items, item]
            }
        })
    }
    onSearchChange = (search) => {
        if (search.length === 0) {
            return this.state.items
        }
        return this.state.items.filter(item => {
            return item.label.toLowerCase().indexOf(search.toLowerCase()) > -1
        })
    }
    toggleDone = (item) => {
        const newItems = this.state.items.map((e, i) => {
            if (i === item) e.done = !e.done
            return e
        })
        this.setState({
            items: newItems
        })
    }
    toggleImportant = (item) => {
        const newItems = this.state.items.map((e, i) => {
            if (i === item) {
                e.important = !e.important
            }
            return e
        })
        this.setState({
            items: newItems
        })
    }

    render() {
        const visibleItems = this.onSearchChange(this.state.searchText)

        return (
            <div className={'app'}>
                <AppHeader/>
                <SearchPanel setSearchText={this.setSearchText}/>
                <ItemStatusFilter/>
                <TodoList items={visibleItems} onRemove={(id) => this.onRemove(id)}
                    changeImportant={(index)=>this.toggleImportant(index)}
                    changeDone={(index)=>this.toggleDone(index)}
                />
                <ItemAddForm onItemAdd={this.onItemAdd}/>
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