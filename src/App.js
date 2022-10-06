import React from "react";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoCounter } from "./TodoCounter";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";
import { TodoItem } from "./TodoItem";

// import logo from "./logo.svg";
// import "./App.css";

const todos = [
  { text: "Cortar Cebolla", completed: true },
  {
    text: "Tomar curso de React en Platzi para poder avanzar con el programa ",
    completed: false,
  },
  { text: "Cenar", completed: false },
  { text: "Ver travestis", completed: false },
  { text: "Ver series", completed: false },
  { text: "Leer", completed: false },
  { text: "Dormir", completed: false },
];

// los componentes empiezan con mayúscula
// La funciones de los componenten no reciben parametros, si no propiedades
function App() {
  return (
    // Solo se puede enviar una etiqueta por componente, este seria React.Fragment
    // en JSX se llaman elementos, no etiquetas
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
    // React.Fragment tambien se puede suplir con etiquetas vacias <> </>
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map((todo) => (
          // para iterar listas es importante porporcionar un a key por elemento, recomendable escribir ID
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
