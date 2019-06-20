export const deleteTodo = todo => {
  // console.log("action creator deleteTodo", todo)
  return {
    type: "DELETE_TODO",
    todo
  }
}

export const addTodo = todo => {
  // console.log("action creator addTodo:", todo)
  return {
    type: "ADD_TODO",
    todo
  }
}
