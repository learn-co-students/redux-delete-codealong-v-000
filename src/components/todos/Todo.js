import React from 'react'

// const Todo = props => <li>{props.text}</li>

const Todo = props => {
  // console.log("props", props.todo)
  return (
    <div>
      <span>{props.todo.text}</span>< br/><button onClick={() => props.delete(props.todo.id)}>DELETE</button>
    </div>
  )
}

export default Todo;
