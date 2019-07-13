export default function manageTodo(state = {
  todos: [],
}, action) {
  console.log(action);
  switch (action.type) {
    case 'ADD_TODO':
      const todo = {
        id: Math.random()*10000000000000000,
        text: action.payload.text
      }
      return { todos: [...state.todos, todo] };

      /*
      return { todos: state.todos.concat(action.payload.text) };
      */

    case 'DELETE_TODO':
      return {todos: state.todos.filter(todo => todo.id !== action.payload)}

      /*
      When props.delete is called, an action is dispatched that contains an id only as its payload.
      */
    default:
      return state;
  }
}
