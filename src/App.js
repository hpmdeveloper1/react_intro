//import logo from './platzi.webp';
import React from 'react';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';

/* const defaultToDos = [
  { text: "Leer Libro", completed: false},
  { text: "Pagar internet", completed: false},
  { text: "Pasear al perro", completed: true},
  { text: "Terminar proyecto react", completed: false},
];

localStorage.setItem('TODOS_V1', JSON.stringify(defaultToDos)); */

function useLocalStorage(itemName, initialValue) {
  
  const localStorageItem = localStorage.getItem(itemName);
  let parseItem = JSON.parse(localStorageItem);
  
  //Si está vacio, inicializamos el array
  if(!localStorageItem){
    localStorage.setItem(itemName, JSON.stringify(initialValue));
  }else {
    parseItem =JSON.parse(localStorageItem);
  }

  const [ item, setItem ] = React.useState(parseItem);

  const handlerSaveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  }
  
  return [ item, handlerSaveItem]
}

function App() {
  

  const [todos, handlerSaveToDos] =useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  //console.log("Buscando..." + searchValue);
  

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText)
  });

  const completeTodo = (text) => {
    const newTodos = [...todos];

    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    )
    
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    
    handlerSaveToDos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];

    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    )
    
    newTodos.splice(todoIndex, 1);
    
    handlerSaveToDos(newTodos);
  }

  return (
    <>
      <TodoCounter 
        completed={completedTodos} 
        total={totalTodos}
      />

      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
        
      <TodoList>
        {
          searchedTodos.map(todo => (
            <TodoItem 
              key={todo.text} 
              text={todo.text} 
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={ () => deleteTodo(todo.text)}
            />
          ))
        }
      </TodoList>
      
      <CreateTodoButton />
    </>
  );
}

export default App;
