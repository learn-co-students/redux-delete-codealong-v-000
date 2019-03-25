import React from 'react'

const Todo = props => {
    return (
        <div>
            <span>{props.todo.text}</span>
            {/* providing definition for anonymous function; calling props.delete inside definition and passing in only other prop available */}
            <button
                onClick={() => props.delete(props.todo.id)}
            >DELETE</button>
        </div>

export default Todo;
