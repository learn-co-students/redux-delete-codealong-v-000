import React, { Component } from 'react'
import Todo from './Todo'

class Todos extends Component {

  render() {
/*
pass the delete action through from the parent component
to have the ability to dispatch an action to the store from each Todo
*/
    const todos = this.props.store.getState().todos.map((todo, index) => {
      return <Todo text={todo.text} key={index} id={todo.id} store={this.props.store} />
    });

    return(
      <ul>
        {todos}
      </ul>
    );
  }
};

export default Todos;
