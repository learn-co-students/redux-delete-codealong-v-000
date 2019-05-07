export default function manageTodo(state={todos:[]}, action) {
	switch (action.type) {

		case 'ADD_TODO':
			return { todos: [...state.todos, action.todo] }

		case 'DELETE_TODO':
			return { todos: state.todos.filter(todo => todo.id !== action.id) };

		default:
			return state;
	}
}
