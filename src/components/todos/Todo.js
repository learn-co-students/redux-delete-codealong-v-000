import React, { Component } from 'react';

class Todo extends Component {
  handleDeleteClick() {
    this.props.store.dispatch(
      {
        type: 'DELETE_TODO',
        id: this.props.id,
      }
    )
  }

  render() {
    return (
      <li>
        {this.props.text}
        <button onClick={this.handleDeleteClick.bind(this)} >Delete</button>
      </li>
    );
  }
};

export default Todo
