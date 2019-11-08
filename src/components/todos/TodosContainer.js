import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo'
// import { throws } from 'assert';

class TodosContainer extends Component {

  // renderTodos = () => this.props.todos.map((todo, id) => <Todo key={id} text={todo} />)
  /*
   To be able to use the ID of each created object.  line 7 changes
   why: The change is minimal, but this set up is actually better. Previously, key was based 
   off the index provided by map. Now its using our randomly generated ID, 
   and is less prone to errors in the virtual DOM.
    We'll need both todo.id and todo.text to be passed into 
    Todo so we pass both down as the object, todo.
  */
  renderTodos = () => {
       return this.props.todos.map(todo => < Todo delete={this.props.delete} key= {todo.id} todo={todo} />)
     }


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
    delete: todoText => dispatch({type: 'DELETE_TODO', payload: todoText})
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(TodosContainer);
