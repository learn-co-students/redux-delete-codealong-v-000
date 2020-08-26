import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo'

class TodosContainer extends Component {

  // renderTodos = () => this.props.todos.map((todo, id) => <Todo delete={this.props.delete} key={id} text={todo.text} />)
  renderTodos = () => this.props.todos.map(todo => <Todo delete={this.props.delete} key={todo.id} todo={todo} />)

  render() {
    return(
      <div>
        {this.renderTodos()}
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

// My solution:
// const mapDispatchToProps = dispatch => {
//   return {
//     deleteTodo: () => dispatch({type: 'DELETE_TODO'})
//   }
// }

// Their solution:
const mapDispatchToProps = dispatch => {
  return {
    delete: todoId => dispatch({type: 'DELETE_TODO', payload: todoId})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
