import React from 'react'

const Todo = props => {

    return(
        <li>
            <span>{props.todo.text}</span>
            <button onClick={() => props.delete(props.todo.id)}>DELETE</button>
        </li>
    )


}
export default Todo;
