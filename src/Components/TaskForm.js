import React, { Component } from "react";

export default class TaskForm extends Component {
  render() {
    return (
      <form>
        <label for="TAREA">Escribir una tarea</label>
        <input id="TAREA" type="text" placeholder="Escribe una tarea" />
        <br></br>
        <textarea placeholder="Escribe una Descripción"></textarea>
      </form>
    );
  }
}
