import React, { Component } from 'react';

class Todo extends Component {

  handleOnClick(){
    // debugger
    this.props.store.dispatch({
      type: 'DELETE_TODO',
      id: this.props.id,
    })
  }
  render() {
    return (
      <li>
        {this.props.text}
        <button onClick={(event) => this.handleOnClick(event)} />
      </li>
    );
  }
};

export default Todo
