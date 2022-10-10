import React from "react";
import "./TodoList.css";
function TodoList(props) {
  return <section className="todos">{props.children}</section>;
}

export { TodoList };
