import React, { Component } from 'react'
import Todo from './Todo'

class Todos extends Component {

  render() {

    const todos = this.props.store.getState().todos.map((todo, index) => {
      return <Todo id={todo.id} text={todo.text} key={index} store={this.props.store} />
    });

    return(
      <ul>
        {todos}
      </ul>
    );
  }
};

export default Todos;
