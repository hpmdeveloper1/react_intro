import React from 'react';
import ('./todoSearch.css')

function TodoSearch({searchValue, setSearchValue}){
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