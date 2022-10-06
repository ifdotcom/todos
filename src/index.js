import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// crea el root para despues redenrizar.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // renderiza un componente llamado App
  // Se le agrega una propiedad llamado saludo
  // <App saludo="React" />
  // <App>Learn React</App>
  <App />
);
