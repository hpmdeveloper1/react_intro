import { AiFillCheckCircle } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
import ('../assets/css/todoItem.css')


function TodoItem({ text, completed, onComplete, onDelete }){
    return (
      <li className="todoItem">
        <AiFillCheckCircle 
          className={`icon icon-check ${completed && "icon-check-active"}`}
          onClick={onComplete}  
        />
        {/* <span 
          className={`icon icon-check ${completed && "icon-check-active"}`}
          onClick={onComplete}
        >
          V
        </span> */}
        <p className={`todoItem-text ${completed && "todoItem-text-complete"}`}>
          {text}
        </p>
        <MdDeleteForever 
          className="icon icon-delete"
          onClick={onDelete}
        />
        {/* <span 
          className="icon icon-delete"
          onClick={onDelete}
        >
          X
        </span> */}
      </li>
    )
}

export { TodoItem }