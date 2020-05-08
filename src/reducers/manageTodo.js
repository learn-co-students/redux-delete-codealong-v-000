import uuid from 'uuid';

export default function manageTodo(state = {
  todos: [],
}, action) {
  switch (action.type) {
    case 'ADD_TODO':
      console.log('add', action)
      return { todos: [ ...state.todos, { id: uuid(), text: action.payload.text } ] }
    case 'DELETE_TODO':
      console.log('delete', action)
      return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload) }
    default:
      return state;
  }
}
