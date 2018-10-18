import React from 'react'

const Todo = ({deleteHandler, todo}) => {
    return (
      <div>
        <span>{todo.text}</span><button onClick={() => deleteHandler(todo.id)}>DELETE</button>
      </div>
    )
  }

export default Todo;
