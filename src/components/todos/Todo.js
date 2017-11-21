import React, { Component } from 'react';

class Todo extends Component {

  handleOnClick = () => {
    alert(this.props.id);
    this.props.store.dispatch({
      type: 'DELETE_TODO',
      id: this.props.id
    });
  }

  render() {
    return (
      <li>
        {this.props.text}<p>
        <button onClick={this.handleOnClick}>Destroy!</button>
        </p>
      </li>
    );
  }
};

export default Todo
