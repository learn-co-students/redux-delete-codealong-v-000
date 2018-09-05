export default function manageTodo(state = {
  todos: [],
}, action) {
  console.log(action);
  switch (action.type) {
    case 'ADD_TODO':
 
      const todo = {
        id: Math.random()*10000000000000000,
        text: action.text
      }
      return {...state, bands: [...state.bands, todo]};
 
    case 'DELETE_TODO':
 
      return {todos: state.todos.filter(todo => todo !== action.id)}
 
    default:
      return state;
  }
}