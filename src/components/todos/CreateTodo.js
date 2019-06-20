import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from "../../actions/todo";

class CreateTodo extends Component {

  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state)
    this.setState({text: ''})
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
    	    <label>add todo</label>
          <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.text}/>
          < br/>
          <input type="submit" />
          < br/> < br/>
          <label> List of Todos </label>
       </form>
     </div>
   );
  }
};
// see action creator: addTodo
// const mapDispatchToProps = dispatch => ({
//   addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
// })

export default connect(null, { addTodo })(CreateTodo);
