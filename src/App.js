import React from "react";

import { AppUI } from "./AppUI";

// import logo from "./logo.svg";
// import "./App.css";

// const defaultTodos = [
//   { text: "Desayunar", completed: true },
//   { text: "Ver TV", completed: false },
//   {
//     text: "Cenar",
//     completed: false,
//   },
// ];

// Custom Hook
// Recibimos como parámetros el nombre y el estado inicial de nuestro item.
function useLocalStorage(itemName, initialValue) {
  // creamos el estado inicial para nuestros errores y carga
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    // Simulamos un segundo de delay de carga
    setTimeout(() => {
      // Manejamos la tarea dentro de un try/catch por si ocurre algún error
      try {
        // localStorage
        // Guardamos nuestro item en una constante
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        // validar si existen datos en localStorage
        if (!localStorageItem) {
          // si no existen datos, crear un array inicial
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          // el estado por defecto será un array vacío
          parsedItem = initialValue;
        } else {
          // si existen elementos, convertir a los datos de localStorage a array de JS
          parsedItem = JSON.parse(localStorageItem);
        }
        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        // En caso de un error lo guardamos en el estado
        setError(error);
      }
    }, 3000);
  });

  // persistencia de datos en localStorage, actulizar localStorage
  const saveItem = (newTodos) => {
    // Manejamos la tarea dentro de un try/catch por si ocurre algún error
    try {
      const stringifiedTodos = JSON.stringify(newTodos);
      localStorage.setItem(itemName, stringifiedTodos);
      setItem(newTodos);
    } catch (error) {
      setError(error);
    }
  };
  // Para tener un mejor control de los datos retornados, podemos regresarlos dentro de un objeto
  return {
    item,
    saveItem,
    loading,
    error,
  };
}

// los componentes empiezan con mayúscula
// La funciones de los componenten no reciben parametros, si no propiedades
function App() {
  // Desestructuramos los datos que retornamos de nuestro custom hook, y le pasamos los argumentos que necesitamos (nombre y estado inicial)
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchName] = React.useState("");

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

    saveTodos(newTodos);
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

    saveTodos(newTodos);
  };

  return (
    <AppUI
      loading={loading}
      error={error}
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
