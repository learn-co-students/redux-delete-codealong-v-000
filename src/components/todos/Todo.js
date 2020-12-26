import React from 'react'


const Todo = props => {
  return (
    <div>
  <li>{props.text}</li><button onClick={() => props.delete(props.text)}>DELETE</button>
  </div>
 )
}

export default Todo;
