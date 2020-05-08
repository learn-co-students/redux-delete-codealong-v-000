import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo'

class TodosContainer extends Component {

  
  render() {
    return(
      <div>
        {this.renderTodos()}
      </div>
    );
  }

  renderTodos = () => {
    return this.props.todos.map((todo) => 
      <Todo key={todo.id} todo={todo} delete={this.props.delete} />
    )
  }
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    delete: todo => dispatch({type: 'DELETE_TODO', payload: todo})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
