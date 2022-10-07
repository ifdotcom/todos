import React from "react";
import "./TodoSearch.css";

function TodoSearch({ searchValue, setSearchName }) {
  // array con dos posiciones, el primero es el valor del estado, el segundo es un metodo que nos permite actualizar el estado
  // const [searchValue, setSearchName] = React.useState("");

  const onSearchValue = (e) => {
    setSearchName(e.target.value);
  };
  return [
    <input
      className="input-search"
      placeholder="Buscar..."
      value={searchValue}
      onChange={onSearchValue}
    />,
  ];
}

export { TodoSearch };
