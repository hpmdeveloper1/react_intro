import React from 'react';
import { ToDoContext } from '../../context';
import ('./todoForm.css');

function TodoForm() {

    const [ newToDoValue, setNewToDoValue ] = React.useState('');

    const {
        addTodo,
        setOpenModal
    } = React.useContext(ToDoContext);

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newToDoValue);
        setOpenModal(false)
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewToDoValue(event.target.value);
    }

    return (
        <form onSubmit={onSubmit}>
            <label> Escribe tu nuevo To-Do</label>
            <textarea 
                placeholder='Cocinar cena' 
                value={newToDoValue}
                onChange={onChange}
                required
            ></textarea>
            <div className='todoForm-buttonContainer'>
                <button onClick={ onCancel } type="button" className='todoform-button-cancel'>
                    Cancelar
                </button>
                <button type="" className='todoForm-button-add'>
                    Guardar
                </button>
            </div>   
        </form>
    )
}

export { TodoForm }