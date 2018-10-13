import React from 'react'

const Todo = props => {
  console.log(props)
  return(
    <div><span>{props.todo.text}<button onClick={() => props.delete(props.todo.id)}>DELETE</button></span></div>
  )
}

export default Todo;
