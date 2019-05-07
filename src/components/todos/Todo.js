import React from 'react';

const Todo = props => (
    <li>
        {props.text} 
        <button id={props.todoId} onClick={props.handleClick}>
            Delete
        </button>
    </li>
);

export default Todo;
