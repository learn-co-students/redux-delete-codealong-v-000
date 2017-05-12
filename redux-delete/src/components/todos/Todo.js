import React, { Component } from 'react'

class Todo extends Component {
  render(){
    handleOnClick() {
      this.props.store.dispatch({
        type: 'DELETE_TODO', 
        id: this.props.id,
      }) 
    }
    return (
      <li>
        {this.props.text}
        <button onClick={() => this.handleOnClick()}
      </li>
    )
  }
}

export default Todo
