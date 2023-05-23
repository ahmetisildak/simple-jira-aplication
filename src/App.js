import './App.css';
import TaskCreate from './components/TaskCreate';
import Tasklist from './components/TaskList';

function App() {

  const createTask = (title, taskDesc) => {
    console.log(title,taskDesc);
    
  }

  return (
    <div className="App">
      <TaskCreate onCreate={createTask}/>
      <h1>Tasks</h1>
      <Tasklist/>
    </div>
  );
}

export default App;
