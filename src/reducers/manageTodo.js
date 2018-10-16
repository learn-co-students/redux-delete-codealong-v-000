export default function manageTodo(state = {
  todos: [],
}, action) {
  switch (action.type) {
    case 'ADD_TODO':

      const todo = {
        id: Math.random()*10000000000000000,
        text: action.payload.text
      }
      // return { todos: state.todos.concat(action.payload.text) };
      return { todos: state.todos.concat(todo) };

    case 'DELETE_TODO':
      return { todos: state.todos.filter(todo => todo.id !== action.payload) }
      // Instead of comparing todo with action.payload, now that todo is an object, we want to match todo.id with the payload
    
    default:
      return state;
  }
}