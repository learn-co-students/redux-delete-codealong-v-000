import React from 'react';

const Todo = props => {
  console.log('Props: ', props.text);
  return (
    <div>
      <span>{props.text.text}</span>
      <button onClick={() => props.delete(props.text.id)}>DELETE</button>
    </div>
  );
};
export default Todo;
