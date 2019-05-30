import React from "react";

class TodoForm extends React.Component {
  state = {
    task: ""
  };

  handleChanges = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitItem = e => {
    e.preventDefault();
    this.props.add(this.state.task);
    this.setState({ task: "" });
  };

  render() {
    // console.log(this.props.name);
    return (
      <form onSubmit={this.submitItem}>
        {/* Event - onChange */}
        <input
          placeholder="Enter a to do!"
          onChange={this.handleChanges}
          value={this.state.task}
          name="task"
        />
        <button>Add Task</button>
        <button>Clear Completed Tasks</button>
      </form>
    );
  }
}

export default TodoForm;
