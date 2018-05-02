let id = 0;

export default function manageTodo(state = {
  todos: []
}, action) {
  switch (action.type) {
    case 'ADD_TODO':
      id++;
      const todo = Object.assign({}, action.todo, { id: id });
      return { todos: state.todos.concat(todo) };
    case 'DELETE_TODO':
      const todo = state.todos.filter(todo => todo.id !== action.id)
      delete todo
      return state
    default:
      return state;
  }
};
