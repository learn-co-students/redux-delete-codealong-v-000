import React from 'react'

const Todo = props => <span>{props.text}</span><button onClick = {()=> props.delete(props.todo.id)}/>DELETE</button> 

export default Todo;
