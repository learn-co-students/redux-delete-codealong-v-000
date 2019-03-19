import React from 'react'

const Todo = props => {
   console.log(props.text);
  
  return (
    <div>
      <span> {props.todo} </span>
      <button onClick={() => props.delete(props.todo.id)}>DELETE</button>
    </div>

 )
}

export default Todo;
 // <span>{props.todo.text}</span><button onClick={() => props.delete(props.todo.id)}>DELETE</button>