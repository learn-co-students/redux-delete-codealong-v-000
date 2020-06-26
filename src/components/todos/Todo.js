import React from 'react'

const Todo = props => {
  return (
    <div>
      <li>{props.todo.text}<button onClick={() => props.delete(props.todo.id)}>DELETE</button></li>
    </div>
  )
}

export default Todo;
