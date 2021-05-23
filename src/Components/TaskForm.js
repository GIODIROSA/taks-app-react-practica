import React, { Component } from "react";

export default class TaskForm extends Component {
  state = {
    title: "",
    description: "",
  };
  onSubmit = (e) => {
    this.props.addTask(this.state.title, this.state.description);
    e.preventDefault();
  };

  onChange = (e) => {
    // console.log(e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label>Escribir una tarea</label>
        <input
          id="tarea"
          name="title"
          type="text"
          placeholder="Escribe una tarea"
          onChange={this.onChange}
          value={this.state.title}
        />
        <br></br>
        <textarea
          name="description"
          placeholder="Escribe una Descripción"
          onChange={this.onChange}
          value={this.state.description}
        ></textarea>
        <br></br>
        <button type="submit">Enviar</button>
      </form>
    );
  }
}
