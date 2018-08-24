import React from 'react'

const Todo = props => {
  return (
    <div>
    
        {/* Note : Adding a click listener but using an anonymous function (rather than a separate named one) to keep this component small */}
        <span>{props.todo.text}</span><button onClick={() => props.delete(props.todo.id)}>DELETE</button>
    </div>
  )
}

export default Todo;
