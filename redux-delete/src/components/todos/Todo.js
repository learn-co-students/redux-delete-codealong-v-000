import React, { Component } from 'react'

class Todo extends Component {

  handleClick() {
    const { id } = this.props

    this.props.store.dispatch({
      type: 'DELETE_TODO',
      id
    })
  }

  render(){
    return (
      <li>
        {this.props.text}
        <button onClick={() => this.handleClick()}>Delete</button>
      </li>
    )
  }
}

export default Todo
