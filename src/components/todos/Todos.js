import React, { Component } from 'react'
import Todo from './Todo'

class Todos extends Component {

  render() {

    const todos = this.props.store.getState().todos.map((todo, index) => {
      //we don't get access to the store automatically, we have to pass it through from the parent component - also pass in id to use in deleting process
      return <Todo text={todo.text} key={index} id={todo.id} store={this.props.store}/>
    });

    return(
      <ul>
        {todos}
      </ul>
    );
  }
};

export default Todos;
