import React, { Component } from 'react';
import './App.css';
import AddTask from './TasksList/AddTask';
import TasksList from './TasksList/TasksList'

class App extends Component {
  state = {}
  render() {
    return (
      <div>
        <AddTask />
        <TasksList />
      </div>
    );
  }
}

export default App;