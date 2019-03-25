export default function manageTodo(state = {
  todos: [],
}, action) {
  switch (action.type) {
    case 'ADD_TODO':
      // assign id to prevent delete of same text
      const todo = {
        id: Math.random() * 10000000000000000,
        text: action.payload.text
      }
      return { todos: state.todos.concat(action.payload.text) };

    case 'DELETE_TODO':
      // user filter that returns every todo that doesn't match what is contained in action.payload
      return { todos: state.todos.filter(todo => todo.id !== action.payload) }

    default:
      return state;
  }
}
