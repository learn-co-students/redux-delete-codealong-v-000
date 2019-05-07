import React, { Component } from 'react'
import { connect } from 'react-redux';
import uuid from 'uuid';
import { addTodo } from '../../actions/actions.js';

class CreateTodo extends Component {

	constructor() {
		super();
		this.state = {
			text: '',
		};
	}

	handleSubmit = event => {
		event.preventDefault();
		this.props.addTodo({
			id: uuid(),
			text: this.state.text
		})
		this.setState({ text: '' })
	}

	handleChange(event) {
		this.setState({
			text: event.target.value
		});
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>add todo</label>
					<input type="text" onChange={(event) => this.handleChange(event)} value={this.state.text} />
					<input type="submit" />
				</form>
			</div>
		);
	}
};

const mapDispatchToProps = dispatch => ({
	addTodo: formData => dispatch(addTodo(formData))
})

export default connect(null, mapDispatchToProps)(CreateTodo);
