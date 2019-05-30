import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import { data } from "./components/data";
import "./components/TodoComponents/Todo.css";

class App extends React.Component {
  // constructor and super() are being abstracted here right?
  state = {
    listData: data
  };
  // create function to select clicked items and toggle completed to tru

  toggleItem = id => {
    this.setState(prevState => {
      return {
        listData: prevState.listData.map(item => {
          if (item.id === id) {
            return {
              ...item,
              completed: !item.completed
            };
          } else {
            return item;
          }
        })
      };
    });
  };

  // a function creating a new object, it's assigning the key value 'task' to the parameter 'task'
  addItem = task => {
    const newItem = {
      task, // task: task
      id: Date.now(),
      completed: false
    };

    this.setState({
      listData: [...this.state.listData, newItem]
    });
  };

  render() {
    console.log(this.state.task);
    return (
      <div>
        <h2>Get to Work!</h2>
        <TodoList tasks={this.state.listData} toggleItem={this.toggleItem} />
        <TodoForm add={this.addItem} name="ben" />
      </div>
    );
  }
}

export default App;

// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state
