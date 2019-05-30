// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component {
  render() {
    console.log(this.props.tasks);
    return (
      <div className="todo-items">
        {this.props.tasks.map((task, i) => {
          console.log(i, task);
          return <Todo {...task} key={i} />;
        })}
      </div>
    );
  }
}

export default TodoList;
