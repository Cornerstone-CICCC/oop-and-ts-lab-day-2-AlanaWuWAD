import { Component } from "../common/Component.js";

export class TodoItem extends Component {
  render(description) {
    const todoElement = document.createElement('li')
    todoElement.className = "todo-item"
    todoElement.innerHTML = description
    return todoElement;
  }
}