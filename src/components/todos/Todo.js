import React from 'react'

const Todo = props => {
    return(
        <div>
            <span>{props.todo.text}</span><span><button onClick={() => props.delete(props.todo.id)}>DELETE</button></span>
        </div>
    )
}

export default Todo;
