// import { bindActionCreators } from "redux";
import uuid from 'uuid';

export default function manageTodo(state = {
  todos: [],
}, action) {
  console.log(action)
  switch (action.type) {
    case 'ADD_TODO':

      //  give each Todo and ID>.. so we can delete it later.
      const todo = {
        id: uuid(),
        text: action.payload.text
      }
      
      return { todos: state.todos.concat(todo) };
    
    
    case 'DELETE_TODO':
      return {todos: state.todos.filter(todo => todo.id!== action.payload)}
/*
ways to remove a specific string from an array, but one of the more brief 
options is to use filter. By adding a second case to our manageTodo reducer, 
we can write a filter that returns every todo that doesn't match what is contained in 
action.payload

*/
    default:
      return state;
  }
}
