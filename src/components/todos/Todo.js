import React from "react";

const Todo = props => (
  <div>
    <li>
      <span>{props.todo.text}</span>{" "}
      <button onClick={() => props.delete(props.todo.id)}>DELETE</button>
    </li>
  </div>
);

export default Todo;
