import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo'

class TodosContainer extends Component {

  //pass this.props.delete to Todo; each Todo component rendered will have access to 'DELETE_TODO' action
  renderTodos = () => return this.props.todos.map(todo => <Todo delete={this.props.delete} key={todo.id} todo={todo} />)
  }

  render() {
    return (
      <div>
        {this.renderTodos()}
      </div>
    );
  }
};

mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    delete: todoText => dispatch({ type: 'DELETE_TODO', payload: todoText })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
