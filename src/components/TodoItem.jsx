import ('../assets/css/todoItem.css')


function TodoItem({ text, completed, onComplete, onDelete }){
    return (
      <li className="todoItem">
        <span 
          className={`icon icon-check ${completed && "icon-check-active"}`}
          onClick={onComplete}
        >
          V
        </span>
        <p className={`todoItem-text ${completed && "todoItem-text-complete"}`}>
          {text}
        </p>
        <span 
          className="icon icon-delete"
          onClick={onDelete}
        >
          X
        </span>
      </li>
    )
}

export { TodoItem }