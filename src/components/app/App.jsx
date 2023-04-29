import React, { useState } from 'react';
import TodoList from "../todo-list";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemAddForm from "../item-add-form";
import ItemStatusFilter from "../item-status-filter/Item-status-filter";
import './app.css'

const App = () => {
    const [items, setItems]= useState([
        {id: 1, label: 'Learn React', done: false, important: false},
        {id: 2, label: 'Learn JS', done: false, important: false},
        {id: 3, label: 'Learn Redux', done: false, important: false},
    ])
    const [searchText, setSearchText]= useState('')
    const [filter, setFilter]= useState('all')
    const [activeButton, setActiveButton]= useState('all')

    const onFilterChange = (filterName) => {
        setFilter(filterName)
        setActiveButton(filterName)
         }
 
    const onRemove=(id)=> {
    
            const index = items.findIndex((item) => item.id === id)
            const newItems = [
                ...items.slice(0, index),
                ...items.slice(index + 1)
            ]
            setItems(newItems)
    }

    const onItemAdd = (label) => {
        if (label) {
            const item = {id: Date.now(), label, done: false, important: false}
           setItems([...items, item])
            }
    }
    const onSearchChange = (items, search) => {
        if (search.length === 0) {
            return items
        }
        return items.filter(item => {
            return item.label.toLowerCase().indexOf(search.toLowerCase()) > -1
        })
    }
    const toggleDone = (id) => {
        const newItems = items.map((e) => {
            if (e.id === id) e.done = !e.done
            return e
        })
        setItems(newItems)
    }
    const toggleImportant = (id) => {
        const newItems = items.map((e, i) => {
            if (e.id === id) {
                e.important = !e.important
            }
            return e
        })
        setItems(newItems)
    }
    const filterItems = (items, filter) => {
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

        const doneCounter = items.filter(item => item.done).length
        const toDoCounter = items.length - doneCounter
        const visibleItems = onSearchChange(filterItems(items, filter), searchText)

        return (
            <div className={'app'}>
                <AppHeader toDoCounter={toDoCounter} doneCounter={doneCounter}/>
                <SearchPanel setSearchText={setSearchText}/>
                <ItemStatusFilter onFilter={onFilterChange} isActive={activeButton}/>
                <TodoList items={visibleItems} onRemove={(id) => onRemove(id)}
                          changeImportant={toggleImportant}
                          changeDone={toggleDone}
                />
                <ItemAddForm onItemAdd={onItemAdd}/>
            </div>
        );
    
}


export default App;