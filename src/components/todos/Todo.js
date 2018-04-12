import React, { Component } from 'react';
 
class Todo extends Component {
 
  handleOnClick = () => {
    this.props.store.dispatch({
      type: 'DELETE_TODO'
      //pass ID of todo along so correct item is deleted
      id: this.props.id,
    });
  }
 
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
