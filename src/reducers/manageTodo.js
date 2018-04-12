let id = 0;
//Because we are using modules, this variable, while not enclosed in a function, is local to the file

export default function manageTodo(state = {
  todos: []
}, action) {
  switch (action.type) {
    case 'ADD_TODO':
      //to find and delete items later, we need to identify them by ID
      id++;
      const todo = Object.assign({}, action.todo, { id: id });
      return { todos: state.todos.concat(todo) };
    case 'DELETE_TODO':
      const todos = state.todos.filter(todo => todo.id !== action.id);
      return  { todos }
    default:
      return state;
  }
};
