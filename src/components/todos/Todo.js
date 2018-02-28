import React, { Component } from 'react';

class Todo extends Component {

  handleClick = () => {
    this.props.store.dispatch({
      type: 'DELETE_TODO'
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
