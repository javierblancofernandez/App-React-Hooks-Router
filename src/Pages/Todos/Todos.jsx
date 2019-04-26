import React from 'react';
import Todo from './todo';

import './todos.scss';
function Todos (props){
    const {
      inputNewTask, 
      handleNewTask, 
      editTask, 
      deleteTask, 
      toggleShowNoCompleted,
      addTask,
      handleOnChange,
      state,
    } = props;
  
    return (
      <div className='todos'>
        <div className='addTask'>
          <input 
            ref={inputNewTask} 
            type='text' 
            placeholder='add new task' 
            onKeyUp={handleNewTask} 
            value={state.newTaskText} 
            onChange={handleOnChange} 
          />
          <button type="button" onClick={() => {
            addTask(state.newTaskText);
          }}>Crea Tarea</button>
          <button onClick={toggleShowNoCompleted}>toggleShowNoCompleted </button>
        </div>
        <div className='taskList'>
          {
            state.todos
              .filter(todo => !state.showNoCompleted || !todo.completed)
              .map(todo => (
                  <Todo 
                    data={todo}
                    // {...todo} 
                    key={todo.id} 
                    onRemove={deleteTask} 
                    onEdit={editTask} 
                    // descripcion={{texto: 'x'}}
                  />
                )
              )
          }
        </div>
        {/* <small>{JSON.stringify(this.state.todos)}</small> */}
      </div>
    );
}

export default Todos;
  