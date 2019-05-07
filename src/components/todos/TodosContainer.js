import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo'
import { deleteTodo } from '../../actions/actions.js'

class TodosContainer extends Component {

	handleClick = (e) => {
		//e.preventDefault();
		this.props.deleteTodo(e.target.id);
	}

	renderTodos = () => this.props.todos.map((todo) => (
		<Todo
			handleClick={this.handleClick}
			todoId={todo.id}
			text={todo.text}
		/>
	));

	render() {
		return (
			<div>
				{this.renderTodos()}
			</div>
		);
	}
};

const mapStateToProps = state => {
	return {
		todos: state.todos
	}
}

const mapDispatchToProps = dispatch => {
	return {
		deleteTodo: (id) => dispatch(deleteTodo(id))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
