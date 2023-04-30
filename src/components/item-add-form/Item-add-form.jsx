import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setItems } from '../../redux/redusers/todoReduser';

const ItemAddForm =()=>{
   const [label, setLabel]= useState('')
   const dispatch = useDispatch()
   const onLabelChange=(e)=> setLabel(e.target.value)
   const items = useSelector((state)=>state.todo.items)
           
     const onSubmit=(e)=>{
        e.preventDefault()
        const item = {id: Date.now(), label, done: false, important: false}
        dispatch(setItems( [...items,item]))
        setLabel('')
    }
        return (
            <form
            onSubmit={onSubmit}>
                <input
                    type="text"
                    value={label}
                    onChange={onLabelChange}
                />
                <button>Add task</button>
            </form>
        );
};

export default ItemAddForm;