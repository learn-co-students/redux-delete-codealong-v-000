import React from 'react'

const Todo = (props) => {
    return (
        <div>
            <ul>
                <li>
                    <span>{props.todo.text}</span>
                    <button onClick={() => props.delete(props.todo.id)}>Delete</button> 
                </li>
            </ul>
        </div>
    )
}

export default Todo;
