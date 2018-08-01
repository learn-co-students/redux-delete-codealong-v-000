import React from 'react'

cconst Todo = props => {
  return (
    <div>
      <span>{props.text}</span><button onClick={ () => props.delete(props.todo.id)}>DELETE</button>
    </div>
  )
}

export default Todo;
