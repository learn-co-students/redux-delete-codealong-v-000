import React from 'react'
 
const Todo = props => {
  return (
    <div>
      <span>{props.text}</span><button>DELETE</button>
    </div>
  )
}
 
export default Todo;