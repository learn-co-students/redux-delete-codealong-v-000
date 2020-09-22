import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo'

class TodosContainer extends Component {
  // pass this.props.delete down to Todo, so that each Todo component rendered will have access to our 'DELETE_TODO' action.
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

// TodosContainer will have access to this.props.delete, 
// which can take in an argument and send it as the action's payload
const mapDispatchToProps = dispatch => {
  return {
    delete: todoText => dispatch({type: 'DELETE_TODO', payload: todoText })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
