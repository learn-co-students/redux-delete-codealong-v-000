//implement a counter
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
      //when the DELETE_TODO action is sent, we use the filter method to return all of the existing todos except the one with the id sent in the action. The filter method returns to us a new array, which we then return.  
      const todos = state.todos.filter(todo => todo.id !== action.id);
      return  { todos }
    default:
      return state;
  }
};
