// This will display the delete button to the user.

import React from 'react'

const Todo = props => {
  return (
    <div>
      <span>{props.todo.text}</span><button onClick={() => props.delete(props.todo.id)}>DELETE</button>
    </div>
  )
}

export default Todo;