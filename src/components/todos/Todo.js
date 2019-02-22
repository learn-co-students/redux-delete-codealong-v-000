import React from 'react'

const Todo = props => {
  return (
    <div>
      <li>{props.todo.text}</li>
      <button onClick={() => props.delete(props.todo.id)}>DELETE</button>
    </div>
  )
}

export default Todo;
