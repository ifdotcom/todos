import React from "react";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoCounter } from "./TodoCounter";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";
import { TodoItem } from "./TodoItem";

// import logo from "./logo.svg";
// import "./App.css";

const defaultTodos = [
  { text: "Cortar Cebolla", completed: true },
  { text: "Dormir", completed: false },
  {
    text: "Tomar curso de React en Platzi para poder avanzar con el programa ",
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
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    // <p>
    //   Edit <code>src/App.js</code> and save to reload.
    // </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    /* Para mandar llamar las propiedades del componente: */
    /* {props.saludo} */
    /* o tambien podemos llamar a children si el componente tiene elementos dentro de las etiquetas */
    //       {props.children}
    //     </a>
    //   </header>
    // </div>

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

export default App;
