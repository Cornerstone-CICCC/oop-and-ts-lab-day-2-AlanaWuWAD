import { Component } from "../common/Component.js";

export class AddTodo extends Component {
  constructor(props){
    super(props)
    this.updateTodo = this.updateTodo.bind(this)
  }

  updateTodo(todo){
    this.props.todoContext.addTodo(todo)

  }

  render() {
    const addElement = document.createElement('div')
    addElement.className = "add-todo"
    addElement.innerHTML = `
      <input type="text" id="todo-input" placeholder="Enter task details...">
      <button id="todo-add-btn">Add To Do</button>
    `
    addElement.querySelector('#todo-add-btn').addEventListener('click',()=>{
      const input = addElement.querySelector('#todo-input').value;
      this.updateTodo(input)
    })
    return addElement;
  }

 
}