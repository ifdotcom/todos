import React from "react";
import { CreateTodoButton } from "./components/CreateTodoButton/CreateTodoButton";
import { TodoCounter } from "./components/TodoCounter/TodoCounter";
import { TodoList } from "./components/TodoList/TodoList";
import { TodoSearch } from "./components/TodoSearch/TodoSearch";
import { TodoItem } from "./components/TodoItem/TodoItem";

function AppUI({
  totalTodos,
  completedTodos,
  searchValue,
  setSearchName,
  searchedTodos,
  completeTodo,
  deleteTodo,
}) {
  return (
    /* Para mandar llamar las propiedades del componente: */
    /* {props.saludo} */
    /* o tambien podemos llamar a children si el componente tiene elementos dentro de las etiquetas */
    //       {props.children}

    // Solo se puede enviar una etiqueta por componente, este seria React.Fragment
    // React.Fragment tambien se puede suplir con etiquetas vacias <> </>
    <>
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch
        // mandamos como props el estado
        searchValue={searchValue}
        setSearchName={setSearchName}
      />
      <TodoList>
        {searchedTodos.map((todo) => (
          // para iterar listas es importante porporcionar un a key por elemento, recomendable escribir ID
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export { AppUI };
