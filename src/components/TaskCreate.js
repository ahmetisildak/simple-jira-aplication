import { useState } from "react"

function TaskCreate({onCreate}) {

  const [title, setTitle] = useState('');
  const [taskDesc, setTaskDesc] = useState('');

  

  const handleChange = (event) => {
    setTitle(event.target.value)
  }
  const handleTaskChange = (event) => {
    setTaskDesc(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title,taskDesc);
    setTitle('');
    setTaskDesc('');
  }

  return (
    <div className="task-create">
      <h3>Please add a task!</h3>
      <form className="task-form">
        <label className="task-label">Title</label>
        <input value={title} onChange={handleChange} className="task-input" />
        <label className="task-label">Add a task!</label>
        <textarea value={taskDesc} onChange={handleTaskChange} className="task-input" rows={5} />
        <button onClick={handleSubmit} className="task-button">Create</button>
      </form>
    </div>
  );
}

export default TaskCreate;
