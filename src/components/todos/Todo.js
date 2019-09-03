import React from 'react'

const Todo = props => {
  return (
    <div>
      <br />
      <li>
        <span>{props.todo.text}</span>
        <button onClick={() => props.delete(props.todo.id)}>x</button>
      </li>
    </div>
  )
}

export default Todo;
