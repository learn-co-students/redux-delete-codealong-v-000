import React, { Component } from 'react'

class Todo extends Component {
  handleDelete() {
    this.props.store.dispatch({
      type: 'DELETE_TODO',
      id: this.props.id,
    })
  }

  render(){
    return (
      <li>
        {this.props.text}
        <button onClick={() => this.handleDelete()} />
      </li>
    )
  }
}

export default Todo
