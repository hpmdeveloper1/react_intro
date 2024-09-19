import React from 'react';
import './todoCounter.css';
import { ToDoContext } from '../../context/';

function TodoCounter(){
    const {totalTodos, completedTodos} = React.useContext(ToDoContext)

    return (
        totalTodos !== completedTodos ?
        <h1 className='todoCounter'>
            Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> tareas
        </h1>

        : 

        <h1 className='todoCounter'>
            Felicidades, no tienes tareas pendientes
        </h1>
    )
}

export { TodoCounter };