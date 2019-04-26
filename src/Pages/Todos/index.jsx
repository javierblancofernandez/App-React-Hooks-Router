import React, { Component } from 'react';
import Todos from './Todos';

class TodosComponent extends Component {
  state = {
    todos: JSON.parse(localStorage.getItem('todos-state')) || [],
    newTaskText: '',
    showNoCompleted: false,
  };
  inputNewTask = React.createRef();
  x = React.createRef();

  componentDidUpdate() {
    localStorage.setItem('todos-state', JSON.stringify(this.state.todos));
    
  }

  handleOnChange = ev => this.setState({ newTaskText: ev.target.value });

  addTask = text => {
    text = text.trim();

    if (text) {
      const newTask = {
        id: Date.now(),
        text,
        completed: false,
        createdAt: new Date(),
      };

      this.setState({ 
          todos: [newTask, ...this.state.todos], 
          newTaskText: ''
        },
        () => {
          this.inputNewTask.current.focus();
        }
      );
    }
  };
  handleNewTask = ev => {
    if (ev.keyCode === 13) {
      this.addTask(this.state.newTaskText);
    }
  };

  deleteTask = idQueQuieroEliminar => {
    this.setState({ todos: this.state.todos.filter(todo => todo.id !== idQueQuieroEliminar) });
  };

  editTask = newTodo => {
    newTodo.updatedAt = new Date();
    let newTodos = this.state.todos.map(todo => (todo.id === newTodo.id ? newTodo : todo));

    this.setState({ todos: newTodos });
  };

  toggleShowNoCompleted = () => this.setState({ showNoCompleted: !this.state.showNoCompleted });

  render() {
    if(false) 
      return <div>Hola</div>

    return (
      <Todos 
        inputNewTask= {this.inputNewTask}
        handleNewTask= {this.handleNewTask}
        editTask= {this.editTask}
        deleteTask= {this.deleteTask}
        addTask={this.addTask}
        toggleShowNoCompleted= {this.toggleShowNoCompleted}
        state={this.state}
        handleOnChange={this.handleOnChange}
      />
    )
  }
}

export default TodosComponent;
