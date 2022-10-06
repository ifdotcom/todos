import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li className="todo-item">
      <span
        className={`icon icon-check ${props.completed && "icon-check--active"}`}
      >
        √
      </span>
      <p className={`text-item ${props.completed && "text-item--completed"}`}>
        {props.text}
      </p>
      <span className="icon icon-delete">X</span>
    </li>
  );
}

export { TodoItem };
