export function addTodo(todo){
    return {
        type: 'ADD_TODO',
        todo
    }
}

export function deleteTodo(id){
    return {
        type: 'DELETE_TODO',
        id
    }
}