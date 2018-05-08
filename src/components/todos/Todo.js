import React, { Component } from 'react';

class Todo extends Component {
  render() {
    return (
      <li>
        {this.props.text}
        <button onClick={this.handleOnClick} />
      </li>
    );
  }
};

export default Todo
