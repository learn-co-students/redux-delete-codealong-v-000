import React, { Component } from 'react';

class Todo extends Component {

  handleChange = () => {
    this.props.store.dispatch({
      type: 'DELETE_TODO'
      id: this.props.id
    })
  }

  render() {
    return (
      <li>
        {this.props.text}
        <button onClick={this.handleChange} > Delete me! </button>
      </li>
    );
  }
};

export default Todo
