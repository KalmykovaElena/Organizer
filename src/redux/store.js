import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../redux/redusers/todoReduser'

export const store = configureStore({
reducer :{
    todo: todoReducer,
}
})