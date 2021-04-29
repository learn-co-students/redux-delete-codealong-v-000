import React from 'react'

const Todo = props => (
  <li>
    {props.text}
    <span color="red" onClick={e=> props.deleteTodo(props.text)}> X</span>
  </li>
)

export default Todo;
