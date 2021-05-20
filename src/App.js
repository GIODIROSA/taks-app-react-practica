import React, { Component } from "react";
import "./App.css";

import tasks from "./sample/tasks.json";
//import wololo from "./sample/wololo.json";


import Tasks from "./Components/Tasks";


console.log(tasks);
//console.table(wololo);

class App extends Component {
  state = {
    tasks: tasks,
  };

  render() {
    return (
      <div>
        <Tasks tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
