import React, { useState } from 'react';

const ItemAddForm =({onItemAdd})=>{
   const [label, setLabel]= useState('')
    
   const onLabelChange=(e)=> setLabel(e.target.value)
           
     const onSubmit=(e)=>{
        e.preventDefault()
        onItemAdd(label)
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