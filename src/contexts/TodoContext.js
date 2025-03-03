export class TodoContext {
  constructor(){
    this.todos = [],
    this.listeners = []
  }

  addTodo(todo){
    this.todos.push({
      id: Math.random()*(9000-1000) + 1000,
      description: todo,
      completed: false
    })
    this.notifyListeners()
  }

  subscribe(listener){
    this.listeners.push(listener)
    console.log(this.listeners)
  }

  notifyListeners(){
    this.listeners.forEach(listener => listener(this.todos))
  }
}