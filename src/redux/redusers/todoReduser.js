import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    items: [
        {id: 1, label: 'Learn React', done: false, important: false},
        {id: 2, label: 'Learn JS', done: false, important: false},
        {id: 3, label: 'Learn Redux', done: false, important: false},
    ],
    searchText:'',
    filter:'all'
};
const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        setItems: (state, action) => {
        state.items =action.payload ;
      },
      setSearchText: (state, action) => {
        state.searchText =action.payload;
      },
      setFilter: (state, action) => {
        state.filter =action.payload;
      },
      toggleImportant:(state, action)=>{
        state.items = state.items.map((e)=>{
            if (e.id === action.payload) {
                e.important = !e.important
            }
            return e
        })
      },
      toggleDone:(state, action)=>{
        state.items = state.items.map((e)=>{
            if (e.id === action.payload) {
                e.done = !e.done
            }
            return e
        })
      }
    },
  });
  

  export const { setItems, setSearchText, setFilter, toggleImportant, toggleDone } = todoSlice.actions;
  
  export default todoSlice.reducer;
  
