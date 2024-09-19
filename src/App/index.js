import React from 'react';
import { AppUI } from './AppUI';
/* Hooks */
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  

  const { item: todos, handlerSaveItem, loading, error } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  //console.log("Buscando..." + searchValue);
  
  console.log("TODOS", todos)
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
    
    handlerSaveItem(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];

    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    )
    
    newTodos.splice(todoIndex, 1);
    
    handlerSaveItem(newTodos);
  }

  return (  
      <AppUI
        loading={loading}
        error={error}
        completedTodos={completedTodos}
        totalTodos={totalTodos}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        searchedTodos={searchedTodos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />
  );
}

export default App;
