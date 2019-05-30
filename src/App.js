import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import { data } from "./components/data";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  state = {
    listData: data
  };

  addItem = task => {
    const newItem = {
      task,
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
        <TodoList tasks={this.state.listData} />
        <TodoForm add={this.addItem} name="ben" />
      </div>
    );
  }
}

export default App;
