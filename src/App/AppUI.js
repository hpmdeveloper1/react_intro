import React from 'react';
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { TodosLoading } from '../components/TodosLoading';
import { TodosError } from '../components/TodosError';
import { TodosEmpty } from '../components/TodosEmpty';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { ToDoContext } from '../context';

function AppUI() {
    
    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo
    } = React.useContext(ToDoContext);
    
    return (
        <>
            <TodoCounter />

            <TodoSearch />
            
            <TodoList>
                { loading && (
                        <>
                            <TodosLoading />
                            <TodosLoading />
                            <TodosLoading />
                        </>
                    )
                }
                { error && <TodosError />}
                { (!loading && searchedTodos.length === 0) && <TodosEmpty/>}
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
    )
}

export { AppUI }