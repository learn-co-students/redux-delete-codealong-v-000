import React from 'react'

const Todo = props => {
	return (
		<div>
			<li>{props.todo.text}  <button onClick={ () => props.delete(props.todo.id) }>Delete</button></li>
		</div>
	)
}

export default Todo;
