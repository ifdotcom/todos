import React from "react";

import { AppUI } from "./AppUI";

// import logo from "./logo.svg";
// import "./App.css";

const defaultTodos = [
  { text: "Desayunar", completed: true },
  { text: "Ver TV", completed: false },
  {
    text: "Cenar",
    completed: false,
  },
];

// los componentes empiezan con mayúscula
// La funciones de los componenten no reciben parametros, si no propiedades
function App() {
  // creamos el estado
  const [searchValue, setSearchName] = React.useState("");
  const [todos, setTodos] = React.useState(defaultTodos);

  // mostrar el total de TODOs
  const completedTodos = todos.filter((todo) => todo.completed === true).length;
  const totalTodos = todos.length;

  // mostrar todos buscados

  let searchedTodos = [];

  if (!searchValue >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  // completar todo
  const completeTodo = (text) => {
    // Buscar indice
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    // copia del array original
    const newTodos = [...todos];
    // cambiar la propiedad completed a true
    newTodos[todoIndex].completed = true;

    // mandar al estado el nuevo array

    setTodos(newTodos);
  };

  // eliminar todo
  const deleteTodo = (text) => {
    // Buscar indice
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    // copia del array original
    const newTodos = [...todos];
    // cortar el todo
    newTodos.splice(todoIndex, 1);

    // mandar al estado el nuevo array

    setTodos(newTodos);
  };

  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchName={setSearchName}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
