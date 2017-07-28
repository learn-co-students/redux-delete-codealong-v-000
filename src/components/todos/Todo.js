import React, { Component } from 'react';

export default class Todo extends Component {

  handleOnClick = () => {
    this.props.store.dispatch({
      type: 'DELETE_TODO',
      id: this.props.id
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
