import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'
import { data } from './components/data'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
 constructor() {
   super();
   this.state = {
     listData: data,
     task: '',
    //  id: '',
    //  completed: ''
   };
 }

 addItem = e => {
   e.preventDefault();

   const newItem = {
     task: this.state.task,
     id: Date.now(),
     completed: false
   };
   
   this.setState({
     listData: [...this.state.listData, newItem],
     task: '',
    //  id: '',
    //  completed: ''
    });
  }
    
handleChanges = event => {
  this.setState({
    [event.target.name]: event.target.value
  });
}

  render() {
    console.log(this.state.listData)
    return (
      <div>
        <h2>Get to Work!</h2>
       <TodoList tasks={this.state.listData} />
       <TodoForm tasks={this.state.newItem} />
      </div>
    );
  }
}

export default App;
