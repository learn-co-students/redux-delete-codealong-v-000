import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo'
import { deleteTodo } from "../../actions/todo";

class TodosContainer extends Component {

  // renderTodos = () => this.props.todos.map((todo, id) => <Todo key={id} text={todo} />)
  renderTodos = () => this.props.todos.map((todo, id) => <Todo delete={this.props.deleteTodo} key={todo.id} todo={todo} />)

  render() {
    return(
      <div>
        {this.renderTodos()}
      </div>
    );
  }
};

const mapStateToProps = state => {
  // console.log("mapstatetoprops",state.todos)
  return {
    todos: state.todos
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     delete: todoText => dispatch({type: 'DELETE_TODO', payload: todoText })
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps )(TodosContainer);

export default connect(mapStateToProps, { deleteTodo })(TodosContainer);
