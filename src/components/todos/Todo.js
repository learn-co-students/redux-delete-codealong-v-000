import React from 'react'

const Todo = props => {
  return (
    <div>
      <span>{props.text}</span>
      <button onClick={ () => props.delete(props.text)}>DELETE</button>
    </div>
  )
}

export default Todo;
