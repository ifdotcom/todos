import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
  // se crea una funcion, si esta recibe argumentos, en necesario ejecutar otra funcion donde se declra el evento ( OnClick)
  const onComplete = () => {
    alert(`Completaste el ToDo ${props.text}`);
  };

  const onDelete = () => {
    alert(`Eliminaste el ToDo ${props.text} `);
  };
  return (
    <li className="todo-item">
      <span
        className={`icon icon-check ${props.completed && "icon-check--active"}`}
        onClick={onComplete}
      >
        √
      </span>
      <p className={`text-item ${props.completed && "text-item--completed"}`}>
        {props.text}
      </p>
      <span className="icon icon-delete" onClick={onDelete}>
        X
      </span>
    </li>
  );
}

export { TodoItem };
