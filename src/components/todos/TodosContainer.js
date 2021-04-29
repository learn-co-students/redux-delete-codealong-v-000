import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo'

class TodosContainer extends Component {

  delTodo = (todo)=> this.props.dispatch({type: "DELETE_TODO", text: todo})

  renderTodos = () => this.props.todos.map((todo, id) => <Todo key={id} text={todo} deleteTodo={this.delTodo}/>)

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

export default connect(mapStateToProps)(TodosContainer);
