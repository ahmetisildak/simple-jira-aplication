import './App.css';
import TaskCreate from './components/TaskCreate';
import Tasklist from './components/TaskList';
import { useState } from 'react';

function App() {

  const [tasks, setTasks] = useState([])

  const createTask = (title, taskDesc) => {
    const createdTasks = [
      ...tasks, {
      id : Math.round(Math.random()*999999),
      title,
      taskDesc
      }
    ];

    setTasks(createdTasks);
    
  }
  const DeleteTaskById = (id) => {
    const afterDeletingTasks = tasks.filter((task)=>{
      return ( 
      task.id !== id );
    })
    setTasks(afterDeletingTasks);
  }

  return (
    <div className="App">
      <TaskCreate onCreate={createTask}/>
      <h1>Tasks</h1>
      <Tasklist tasks={tasks} onDelete={DeleteTaskById}/>
    </div>
  );
}


export default App;
