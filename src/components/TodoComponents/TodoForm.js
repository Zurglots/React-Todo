import React from 'react';

class TodoForm extends React.Component{
render() {
    return (
        <form onSubmit={this.addItem}>
          {/* Event - onChange */}
          <input
            placeholder="Enter a to do!"
            onChange={this.handleChanges}
            value={this.newItem}
            name="newItem"
            type="text"
          />
          <button onClick={this.addItem}>Add Task</button>
          <button>Clear Completed Tasks</button>
          </form>
        )
    }
};

export default TodoForm;