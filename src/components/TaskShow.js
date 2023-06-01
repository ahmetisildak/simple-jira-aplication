function TaskShow({task, onDelete}) {

    const handleDelete = () => {
        onDelete(task.id)
    }


    
    return (
    <div className="task-show">      
      <h3 className="task-title">Title</h3>
      <p>{task.title}</p>
      <h3 className="task-title">Your Task</h3>
      <p>{task.taskDesc}</p>
      <div>
        <button className="task-delete" onClick={handleDelete}>Delete</button>
        <button className="task-edit">Update</button>
      </div>

        
    </div>
    );
}

export default TaskShow;

