import React from 'react'

const Todo = props => {
  debugger
  return (
    <div>
      <span>{props.text}</span><button onClick={() => props.delete(props.todo.id)}>DELETE</button>
    </div>
  )
}

export default Todo;
