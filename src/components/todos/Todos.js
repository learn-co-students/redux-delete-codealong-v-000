import React, { Component } from 'react'
import Todo from './Todo'

class Todos extends Component {

  render() {

    // const todos = this.props.store.getState().todos.map((todo, index) => {
    //   return <Todo text={todo.text} key={index} />
    // });

    // const todos = this.props.store.getState().todos.map((todo, index) => {
    //   return <Todo text={todo.text} key={index} store={this.props.store} /* <- code change */ /> 
      //must give child access to the store so it can dispatch to the store
    // });

    //now include ID
    const todos = this.props.store.getState().todos.map((todo, index) => {
      return <Todo text={todo.text} key={index} id={todo.id} /* <- code change */ store={this.props.store} /> 
    });


    return(
      <ul>
        {todos}
      </ul>
    );
  }
};

export default Todos;
