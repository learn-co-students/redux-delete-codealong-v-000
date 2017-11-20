import React, { Component } from 'react';

class Todo extends Component {

  handleOnClick = () => {
    this.props.store.dispatch({
      type: 'DELETE_TODO',
      id: this.props.id
    })
  }

/*
click button calls a callback function handleOnClick()
that then dispatches an action
*/

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
