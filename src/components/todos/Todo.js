import React, { Component } from 'react';

class Todo extends Component {

  handleOnClick = () => {
    this.props.store.dispatch({
      type: 'DELETE_TODO',
      id: this.props.id, //each component has the correct id as the prop so this just needs to be sent along
    })
  }

  render() {
    return (
      <li>
        {this.props.text}
        <button onClick={this.handleOnClick}/> //clicked, calls back the function, dispatches action
      </li>
    );
  }
};

export default Todo
