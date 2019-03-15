import React from 'react'

const Todo = props => {
	return (
		props.text !== "" ?
		<div>
			<span>{props.text}</span><button onClick={() => props.delete(props.text)}>DELETE</button>
		</div> :
		null
	)
}

export default Todo;
