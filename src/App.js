//import logo from './platzi.webp';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';

const defaultToDos = [
  { text: "Leer Libro", completed: false},
  { text: "Pagar internet", completed: false},
  { text: "Pasear al perro", completed: true},
  { text: "Terminar proyecto react", completed: false},
];

function App() {
  return (
    <>
      <TodoCounter completed={5} total={10}/>

      <TodoSearch />
        
      <TodoList>
        {
          defaultToDos.map(todo => (
            <TodoItem 
              key={todo.text} 
              text={todo.text} 
              completed={todo.completed}
            />
          ))
        }
      </TodoList>
      
      <CreateTodoButton />
    </>
  );
}

export default App;
