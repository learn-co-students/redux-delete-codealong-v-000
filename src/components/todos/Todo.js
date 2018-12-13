import React from 'react'

const Todo = props => <div><span>{props.text}</span><button onClick={() => props.delete(props.text)}>DELETE</button></div>

export default Todo;
