export default function manageTodo(state = {
  todos: [],
}, action) {
  switch (action.type) {
    case "ADD_TODO":
   
      // Generate a long random id number for each todo created
      // and store an array of objects.
      const todo = {
      	id: Math.random()*10000000000000000,
      	text: action.payload.text
      }
      return action.payload.text !== "" ? { todos: state.todos.concat(todo) } : state

    case "DELETE_TODO":

    	return{todos: state.todos.filter(todo => todo.id !== action.payload)}

    default:
      return state
  }
}
