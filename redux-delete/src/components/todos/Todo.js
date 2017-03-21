import React, { Component } from 'react'

class Todo extends Component {

  handleClick() {
    this.props.store.dispatch({
      type: 'DELETE_TODO',
      id: this.props.id
    })
  }

  render(){
    return (
      <li>
        {this.props.text}<br />
        <button onClick={() => this.handleClick()} >Delete</button>
      </li>
    )
  }
}

export default Todo
