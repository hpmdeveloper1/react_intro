import './createTodoButton.css';

function CreateTodoButton(){
    return (
        <button 
            className="createTodoButton"
            onClick={(event) => {
                    console.log("le diste click")
                    console.log(event)
                }   
            }
        >
            +
        </button>
    )
}

export { CreateTodoButton }