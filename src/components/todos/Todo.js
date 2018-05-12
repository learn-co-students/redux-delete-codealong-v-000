import React, { Component } from 'react';
 
class Todo extends Component {
 
  handleOnClick = () => {
    this.props.store.dispatch({
      type: 'DELETE_TODO',
      //Because each component has the correct id as a prop, we simply need to send this along as a payload to our dispatched action
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