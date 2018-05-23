import React, { Component } from 'react'
import Todo from './Todo'

// need to make sure to pass through the text and id to each Todo 

class Todos extends Component {

  render() {

    const todos = this.props.store.getState().todos.map((todo, index) => {
      return <Todo text={todo.text} key={index} id={todo.id} store={this.props.store} />
    });

    return (
      <ul>
        {todos}
      </ul>
    );
  }
};

export default Todos;
