import React, { Component } from "react";
import "./App.css";

//Importando API datos
import tasks from "./sample/tasks.json";

//Importando Componentes
import Tasks from "./Components/Tasks";
import TaskForm from "./Components/TaskForm";

//console.log(tasks);
//console.table(wololo);

class App extends Component {
  state = {
    tasks: tasks,
  };

  render() {
    return (
      <div>
        <TaskForm />
        <Tasks tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
