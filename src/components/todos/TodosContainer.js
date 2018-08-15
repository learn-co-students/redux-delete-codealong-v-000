import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo'

class TodosContainer extends Component {

  //instead of using the index as the id (and HTML id), we use the freshly-implemented 15-digit number
  //Which we can use to surgically delete the to-do later,we also pass the whole object down as a prop (to-do)
  renderTodos = () => this.props.todos.map((todo) => <Todo delete={this.props.delete} key={todo.id} todo={todo} />)

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

const mapDispatchToProps = dispatch => {
  return {
    delete: todoText=> dispatch({type: "DELETE_TODO", payload: todoText})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
