import React from "react";

const Todo = props => {
  console.log(props.completed);
  return (
    <div>
      <li>{props.id}</li>
      <li>{props.task}</li>
      <li>{props.completed}</li>
    </div>
  );
};

export default Todo;
