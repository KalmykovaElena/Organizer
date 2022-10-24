import React from 'react';
import InputItem from "../InputItem/InputItem";
import Button from "../Button/Button";
import './SearchItem.css'

const SearchItem = ({description,controls,type}) => {
    return (
        <div className={'SearchItem'}>
            <InputItem description={description}/>
            {
                controls.map((e,i)=>{
                    return <Button key={i} name={e} type={type}/>
                })

            }
        </div>
    );
};

export default SearchItem;