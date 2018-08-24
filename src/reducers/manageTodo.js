export default function manageTodo(state = {
  todos: [],
}, action) {
  console.log(action);

  switch (action.type) {
    
    case 'ADD_TODO':
      // Note : For some reason, using C9 maybe, I had to wrap the below const todo in a {} or else it would get an error
      { const todo = {
        id: Math.random()*10000000000000000,
        text: action.payload.text
      }
      console.log(todo)
      return {todos: state.todos.concat(todo)} }

    // Note : Filtering is a brief way of displaying todos that don't match the specified one (using text content)
    case 'DELETE_TODO':
      return {todos: state.todos.filter(todo => todo.id !== action.payload)}

    default:
      return state;
  }
}
