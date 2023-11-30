import { useState, useContext } from 'react';
import { TaskContext } from './TaskContext';

const EditTask = ({ task, onClose }) => {
  const { editTask } = useContext(TaskContext);
  const [taskName, setTaskName] = useState(task.name);
  const [taskDescription, setTaskDescription] = useState(task.description);
  const [priority, setPriority] = useState(task.priority);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTask(task.id, { name: taskName, description: taskDescription, priority });
    onClose();
  };

  return (
    <div>
      <h2>Edit Task</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Task Name:
          <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
        </label>
        <br />
        <label>
          Task Description:
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
          ></textarea>
        </label>
        <br />
        <label>
          Priority:
          <select value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>
        <br />
        <button type="submit">Save Changes</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditTask;
