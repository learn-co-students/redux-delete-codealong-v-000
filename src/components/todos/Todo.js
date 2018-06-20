import React, { Component } from 'react';

class Todo extends Component {
  handleClick = () => {
    this.props.store.dispatch({
      type: 'DELETE_TODO',
      id: this.props.id
    })
  }
  render() {
    return (
      <li>
        {this.props.text}
        <button onClick={this.handleClick} />
      </li>
    );
  }
};

export default Todo
