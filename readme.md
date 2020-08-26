# Deleting Items with Redux

## Objectives

  * How to delete individual elements (making a delete button for items on the display)

  * Parts: 
    1. Components\todos:
        - CreateTodo.js
        - Todo.js
        - TodosContainer.js
    2. Reducers:
        - manageTodo.js
    3. App.js
    4. Index.js
    
## Review and Goal

- We are never updating the DOM directly. 
- Redux Pattern:  Have our store hold and update our state.
  Then have React display that state. 

GOAL:
# DELETE A TODO:
  1. Add a button that when clicked, dispatches an action telling the store to delete a specific todo.
  2. Have a button next to each list element with the todo;
  3. When a user clicks on the button, the list element will be removed.
  4. The `Todos` component displays the current list of todos, if we remove a todo from the store's  state, the display of that todo should be removed as well.


STEP 1:
#### Create TodosContainer

  1. Sticking with our container vs presentational set up - do not load the
      presentational Todo component up with logic. 

  2. The TodosContainer connects us to __Redux__.   (__Redux__ is the Redux Store)
      a. Write a new `mapDispatchToProps()` function to include an action.
      b. Now, TodosContainer will have access to `this.props.delete`, which can take in
          an argument and send it as the action's `payload`. 
      c. We can then _pass_ `this.props.delete` down to Todo, so that each Todo component rendered will have access to our 'DELETE_TODO' action.

```javascript

// ./src/components/todos/TodosContainer.js

import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo'

class TodosContainer extends Component {

  renderTodos = () => this.props.todos.map((todo, id) => <Todo key={id} text={todo} />)

  render() {
    return(
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
    delete: todoText => dispatch({type: 'DELETE_TODO', payload: todoText })
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);

```

STEP 2:
#### Create Todo Component in Todo.js
1. Todo is receiving `this.props.delete`.
2. Incorporate a button. 
3. When we click the button we want to be able to delete this particular todo. At
the moment, our todos are just strings, stored in an array. Since that is all we
have to work with, we add an `onClick` attribute to the new button. To keep this
component small, we can provide an anonymous function in-line.
4. This allows you to dispatch an action to the reducer from each Todo.

At this point:
  - We're providing a definition for an anonymous function. 
  - _Inside_ the definition, we're calling `props.delete`, and passing in the only other prop available, `props.text`.
  - Back in our connected TodosContainer, when this delete button is clicked, the
    value of `props.text` is passed into our dispatched action as the payload.
  - There is a `console.log` in our reducer that displays actions. Clicking the
    delete button should log an action with the todo's text content as the payload.

## Tell the Store Which Todo to Delete

- Our todos are stored as strings in an array. 
- There are a number of ways to remove a specific string from an array, but one of the more brief options is to use `filter`. 
- By adding a second case to our `manageTodo` reducer, we can write a `filter` that returns every todo that _doesn't_ match what is contained in `action.payload`.
- In our browser, the delete button should now successful cause todos to
disappear. 
- Give the todos specific IDs to avoid filtering out multiple todos with the same text.

#### In the Reducers/manageTodo.js, give todo an ID:

- A Todo should have an id the moment it gets created. 
- So, we know that our reducer creates the Todo when a CREATE_TODO action is dispatched. 
- Using `Math.random()*10000000000000000` will generate a long random number each
    time a todo is created. Now, instead of just storing an array of strings, we'll
    be storing an array of objects.
- This causes a problem 'downstream', though: we need to update our TodosContainer
    to pass the correct content.
- Previously, `key` was based off the _index_ provided by `map`. 
- Now its using our randomly generated ID, and is less prone to errors in the virtual DOM. 
- We'll need  both `todo.id` and `todo.text` to be passed into Todo so we pass both down as the object,
`todo`.
- Now that we've got `todo.id`, we can modify the Todo component to use `props.todo.id`
on click.
- Now, when `props.delete` is called, an action is dispatched that contains an
_id_ only as its payload.
- Updating `DELETE_TODO` in the Reducer: Now that we're passing an _id_ to `props.delete`, we need to modify our reducer once more.
- Instead of comparing `todo` with `action.payload`, now that `todo` is an object,
we want to match `todo.id` with the payload.
- With this final change, todo objects can be added and deleted, each with their
own unique id!

## Summary

Ok, so in this lesson we covered how to delete a specific Todo.
    - we gave each Todo a unique id
    - made sure we passed that id into each Todo component. 
    - Then we made sure to send along that information when dispatching an action via `props.delete`. 
    - Finally, we had our reducer update the state by filtering out the Todo to be deleted.
