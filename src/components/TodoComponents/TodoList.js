// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

// tasks is being passed in as a prop from app.js line 29 with the state data.js assigned as listData
// how is key working in this instance? is it just assigning the ID generated from the item to be used in toggleitem?
class TodoList extends React.Component {
  render() {
    // console.log(this.props.tasks);
    return (
      <div className="todo-items">
        {this.props.tasks.map(task => {
          //   console.log(task);
          return (
            <Todo {...task} key={task.id} toggleItem={this.props.toggleItem} />
          );
        })}
      </div>
    );
  }
}

export default TodoList;
