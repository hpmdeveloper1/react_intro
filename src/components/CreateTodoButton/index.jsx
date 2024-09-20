import React from 'react';
import './createTodoButton.css';
import { ToDoContext } from '../../context';

function CreateTodoButton(){
    const { openModal, setOpenModal } = React.useContext(ToDoContext);
    return (
        <button 
            className="createTodoButton"
            onClick={(event) => {
                    console.log("le diste click")
                    console.log(event)
                    setOpenModal(!openModal)
                }   
            }
        >
            +
        </button>
    )
}

export { CreateTodoButton }