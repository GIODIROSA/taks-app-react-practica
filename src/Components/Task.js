import React, { Component } from "react";
import "./Task.css";

class Task extends Component {
  //fotme de hacer style mas interactiva para las app
  StyleCompleted() {
    return {
      fontSize: "20px",
      color: this.props.task.done ? "#a7bbc7" : "#ffb26b",
      textDecoration: this.props.task.done ? "line-through" : "none",
    };
  }

  render() {
    //destructurar
    const { task } = this.props;

    return (
      <p style={this.StyleCompleted()}>
        {task.title}-{task.description}-{task.done}-{task.id}
        <input type="checkbox" />
        <button style={btnDelete}>x</button>
      </p>
    );
  }
}

const btnDelete = {
  fontSize: "18px",
  background: "#ea2027",
  borderRadius: "50%",
  color: "#fff",
  border: "none",
  padding: "10px 15px",
  cursor: "pointer",
};

export default Task;
