export default function manageTodo(state = {
  todos: [],
}, action) {
  console.log(action)
  switch (action.type) {
    case 'ADD_TODO':

      return { todos: state.todos.concat(action.payload.text) };
    case 'DELETE_TODO':
      const todoCopy = [...state.todos]
      todoCopy.splice(todoCopy.findIndex(text => text === action.text), 1)
      return {todos: todoCopy}
    default:
      return state;
  }
}
