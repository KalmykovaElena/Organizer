import React from 'react';
import TodoList from "../todo-list";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemAddForm from "../item-add-form";
import ItemStatusFilter from "../item-status-filter/Item-status-filter";
import './app.css'

class App extends React.Component {
    id = 4

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {id: 1, label: 'Learn React', done: false, important: false},
                {id: 2, label: 'Learn JS', done: false, important: false},
                {id: 3, label: 'Learn Redux', done: false, important: false},
            ],
            searchText: '',
            filter: 'all',
            activeButton: 'all'
        }
    }

    onFilterChange = (filterName) => {
        this.setState({
            filter: filterName,
            activeButton: filterName
        })
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
        if (label) this.setState((state) => {
            const item = {id: ++this.id, label, done: false, important: false}
            return {
                items: [...state.items, item]
            }
        })
    }
    onSearchChange = (items, search) => {
        if (search.length === 0) {
            return items
        }
        return this.state.items.filter(item => {
            return item.label.toLowerCase().indexOf(search.toLowerCase()) > -1
        })
    }
    toggleDone = (id) => {
        const newItems = this.state.items.map((e) => {
            if (e.id === id) e.done = !e.done
            return e
        })
        this.setState({
            items: newItems
        })
    }
    toggleImportant = (id) => {
        const newItems = this.state.items.map((e, i) => {
            if (e.id === id) {
                e.important = !e.important
            }
            return e
        })
        this.setState({
            items: newItems
        })
    }
    filterItems = (items, filter) => {
        switch (filter) {
            case'all':
                return items
            case'active':
                return items.filter(item => !(item.done))
            case 'done':
                return items.filter(item => item.done)
            case 'important':
                return items.filter(item => item.important)
            default:
                return items
        }
    }

    render() {
        const {items, searchText, filter} = this.state
        const doneCounter = items.filter(item => item.done).length
        const toDoCounter = items.length - doneCounter
        const visibleItems = this.onSearchChange(this.filterItems(items, filter), searchText)

        return (
            <div className={'app'}>
                <AppHeader toDoCounter={toDoCounter} doneCounter={doneCounter}/>
                <SearchPanel setSearchText={this.setSearchText}/>
                <ItemStatusFilter onFilter={this.onFilterChange} isActive={this.state.activeButton}/>
                <TodoList items={visibleItems} onRemove={(id) => this.onRemove(id)}
                          changeImportant={this.toggleImportant}
                          changeDone={this.toggleDone}
                />
                <ItemAddForm onItemAdd={this.onItemAdd}/>
            </div>
        );
    }
}


export default App;