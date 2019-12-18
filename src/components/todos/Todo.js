import React from 'react'

const Todo = props => {
    return(
      <div>
        {console.log(props)}
        <ul>
          <li>{props.todo.text}<button onClick={() => props.delete(props.todo.id)}>DELETE</button></li>
        </ul>
      </div>
      )
  }

export default Todo;
