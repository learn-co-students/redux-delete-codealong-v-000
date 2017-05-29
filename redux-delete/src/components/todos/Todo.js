import React, { Component } from 'react'

class Todo extends Component {
  handleClick(e){
    this.props.store.dispatch({
      type: 'DELETE_ITEM',
      id: this.props.id
    })
  }

  render(){
    return (
      <li>
        {this.props.text}
        <button onClick={(e) => this.handleClick(e)}>delete</button>
      </li>
    )
  }
}

export default Todo
