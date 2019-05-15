import React from 'react'

// by naming the props.text with {todo} in TodosContainer, we can access the obj here and delete it
// and because it's a simple component with a singular purpose, we can incorporate the function within
// the JSX itself
const Todo = props => {
  return (
    <div>
      <span>{props.text}</span><button onClick={() => props.delete(props.todo.id)}>DELETE</button>
    </div>
  )
}

export default Todo;
