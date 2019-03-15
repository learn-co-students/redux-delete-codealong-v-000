export default function manageTodo(state = {
  todos: [],
}, action) {
  switch (action.type) {
    case 'ADD_TODO':
      console.log("state: ", state)
      return action.payload.text !== "" ? { todos: state.todos.concat(action.payload.text) } : state

    default:
      return state
  }
}
