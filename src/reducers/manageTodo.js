import uuid from 'uuid';

export default function manageTodo(state = {
  todos: [],
}, action) {
  switch (action.type) {
    case 'ADD_TODO':
      const todo = {  
        // id: Math.random()*100000000000,
        id: uuid(),
        text: action.payload.text
      }
      return { todos: state.todos.concat(todo) };

    case 'DELETE_TODO':
      return {todos: state.todos.filter(todo => todo.id !== action.payload)}
    default:
      return state;
  }
}
