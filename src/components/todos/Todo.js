import React from 'react'

const Todo = props => {
  return(
    <div>
      <span>{props.todo.text}</span><button onClick={()=>props.delete(props.todo.id)}>Delete</button>
    </div>
  )
}

export default Todo;
