import React from "react";
import PropTypes from "prop-types";

const Todo = props => {
  return (
    <div>
      <span>{props.todo.text}</span>
      <button onClick={() => props.delete(props.todo.id)}>DELETE</button>
    </div>
  );
};

Todo.propTypes = {
  text: PropTypes.string
};

export default Todo;
