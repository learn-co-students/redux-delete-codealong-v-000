import React from 'react'

const Todo = props => 
    <div>
        <span>{props.text}</span><button onClick={() => props.delete(props.id)}>DELETE</button>
    </div>

export default Todo;
