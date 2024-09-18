import '../assets/css/todoCounter.css';

function TodoCounter({ completed, total }){
    return (
        <h1 className='todoCounter'>
            Has completado <span>{completed}</span> de <span>{total}</span> tareas
        </h1>
    )
}

export { TodoCounter };