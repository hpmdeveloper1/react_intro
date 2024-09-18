import ('../assets/css/todoItem.css')


function TodoItem({ text, completed }){
    return (
      <li className="todoItem">
        <span className={`icon icon-check ${completed && "icon-check-active"}`}>
          V
        </span>
        <p className={`todoItem-text ${completed && "todoItem-text-complete"}`}>
          {text}
        </p>
        <span className="icon icon-delete">
          X
        </span>
      </li>
    )
}

export { TodoItem }