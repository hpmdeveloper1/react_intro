import React from "react";
import { useLocalStorage } from './useLocalStorage';

const ToDoContext = React.createContext();

function TodoProvider({ children }) {
  //Funciones del contexto
  const {
    item: todos,
    handlerSaveItem,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = React.useState("");
  //console.log("Buscando..." + searchValue);

  console.log("TODOS", todos);
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const completeTodo = (text) => {
    const newTodos = [...todos];

    const todoIndex = newTodos.findIndex((todo) => todo.text === text);

    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;

    handlerSaveItem(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];

    const todoIndex = newTodos.findIndex((todo) => todo.text === text);

    newTodos.splice(todoIndex, 1);

    handlerSaveItem(newTodos);
  };

  return (
    <ToDoContext.Provider value={{
        loading,
        error,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo
    }}>
        {children}
    </ToDoContext.Provider>
  );
  
}

export { ToDoContext, TodoProvider };
