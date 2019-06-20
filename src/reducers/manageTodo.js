export default function manageTodo(state = {
  todos: [],
}, action) {
  switch (action.type) {
    case 'ADD_TODO':
      // console.log("reducer add_todo:", action.todo.text)
      const todo = {
        id: Math.random()*10000000000000000,
        text: action.todo.text
      }
        return { todos: state.todos.concat(todo) };

      case "DELETE_TODO":
      // console.log("delete", action.todo)
        return {todos: state.todos.filter(todo => todo.id !== action.todo)}

      // if using mapDispatchToProps in TodosContainer
      // return {todos: state.todos.filter(todo => todo.id !== action.payload)}

      default:
        return state;
  }
}
