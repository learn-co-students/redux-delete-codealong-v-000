import React from 'react'

// const Todo = props => <li>{props.text}</li>

const Todo = props => {
  return (
    <div>
      <span>{props.todo.text}</span>
      <button onClick={() => props.delete(props.todo.id)}>DELETE</button>
      {/*Button doesn't need a value attribute - what is inside it is the value*/}
    </div>
  )
}

export default Todo;
