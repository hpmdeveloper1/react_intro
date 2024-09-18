import '../assets/css/todoCounter.css';

function TodoCounter({ completed, total }){
    return (
        total !== completed ?
        <h1 className='todoCounter'>
            Has completado <span>{completed}</span> de <span>{total}</span> tareas
        </h1>

        : 

        <h1 className='todoCounter'>
            Felicidades, no tienes tareas pendientes
        </h1>
    )
}

export { TodoCounter };