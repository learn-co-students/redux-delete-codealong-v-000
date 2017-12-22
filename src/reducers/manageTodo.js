let id = 0;

export default function manageTodo(state = {
  todos: []
}, action) {
  switch (action.type) {
    case 'ADD_TODO':
      id++; //counter, variable is local to this file
      const todo = Object.assign({}, action.todo, { id: id });
      return { todos: state.todos.concat(todo) };
    case 'DELETE_TODO':
      const todos = state.todos.filter(todo => todo.id !== action.id); //filter method returns all the existing todos except the one wth the id that needs to be deleted
      return {todos}
    default:
      return state;
  }
};
