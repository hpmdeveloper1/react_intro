import React from 'react';
import { ToDoContext } from '../../context';
import ('./todoSearch.css')

function TodoSearch(){
    const {searchValue, setSearchValue}  = React.useContext(ToDoContext);
    return (
        <input 
            className="todoSearch" 
            placeholder="Buscar tarea"
            value={ searchValue }
            onChange={(event) => {
                setSearchValue(event.target.value);
            }}
        />
    )
}

export { TodoSearch };