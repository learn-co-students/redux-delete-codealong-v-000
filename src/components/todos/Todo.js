import React, { Component } from 'react';

class Todo extends Component {

  handlOnClick = () => {
    this.props.store.dispatch({
      type: 'DELETE_TODO',
      id: this.props.id,
    })
  }

  render() {
    return (
      <li>
        {this.props.text}
        <button onClick={this.handlOnClick}>DELEET!</button>
      </li>
    );
  }
};

export default Todo
