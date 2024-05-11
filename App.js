import React, { useState } from 'react';
import "./index2.css";

function Hello() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTask = () => {

    if (inputValue.trim() !== "") {
      setTasks([...tasks, { text: inputValue, isCompleted: false }]);
      setInputValue("");
    }
    
  };

  const handleDeleteTask = (index) => {
    const textElement = document.querySelector('.delete');
    textElement.classList.add('strikethrough');
  };

  const handleUndoTask = (index) => {
    const textElement = document.querySelector('.delete');
    textElement.classList.add('strikethrough2');
  };
  
  return (
    <>
      <div className="header">
        <h1>To-Do list</h1>
        <br/>
        <input 
          type="text" 
          className="input" 
          value={inputValue} 
          onChange={handleInputChange} 
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <div className="task-list">
        {tasks.map((task, index) => (
          <div className="main">
          <div key={index} className={  task.isCompleted ? "completed-task" : "task"  }>
            <p className="delete">{task.text}</p>
            <button onClick={() => handleUndoTask(index)} >Undo</button>
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
           </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Hello;
