import React from "react";
import "./CreateTodoButton.css";
function CreateTodoButton() {
  const onClickButton = (msg) => {
    alert(msg);
  };
  return (
    <button
      className="todo-button"
      onClick={() => onClickButton("Se abrirá uun modal")}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
