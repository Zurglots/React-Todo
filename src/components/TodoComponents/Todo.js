import React from "react";

const Todo = props => {
  console.log(props);
  return (
    <div>
      {/* <li>{props.id}</li> */}
      <li
        className={`task${props.completed ? " completed" : ""}`}
        onClick={() => props.toggleItem(props.id)}
      >
        {props.task}
      </li>
      {/* <li>{props.completed}</li> */}
    </div>
  );
};

export default Todo;
