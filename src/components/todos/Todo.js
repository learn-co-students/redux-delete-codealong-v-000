import React from 'react'

const Todo = props => {
    
    // only id is contained as payload when dispatched
    return(
        <div>
            <span>{props.text}</span><button onClick={() => props.delete(props.todo.id)}>DELETE</button>
        </div>
    )
}

export default Todo;
