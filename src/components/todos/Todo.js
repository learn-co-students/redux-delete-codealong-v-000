import React from "react"

const Todo = props => {
	return (
		props.text !== "" ?
		<div>
			<span>{props.todo.text}</span>
			<label> </label><button onClick={() => props.delete(props.todo.id)}>DELETE</button>
		</div> :
		null
	)
}

export default Todo
