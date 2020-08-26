import uuid from 'uuid';

export default function manageTodo(state = {
  todos: [],
}, action) {
  console.log(action)
  switch (action.type) {
    case 'ADD_TODO':

      const todo = {
        id: uuid(),
        text: action.payload.text
      };
      return { todos: state.todos.concat(todo) };

    case 'DELETE_TODO':
      // Note: Confusing though it is, here the payload is a string, not an object, unlike in 'ADD_TODO'.
      // return { todos: state.todos.filter(todo => todo !== action.payload) };

      // Now, payload is the todo's id.
      return { todos: state.todos.filter(todo => todo.id !== action.payload) };

    default:
      return state;
  }
}
