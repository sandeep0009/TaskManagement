import  { useState, useContext } from 'react';
import { TaskContext } from './TaskContext';

const AddTask = () => {
  const { addTask } = useContext(TaskContext);
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [priority, setPriority] = useState('low');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ name: taskName, description: taskDescription, priority });
    setTaskName('');
    setTaskDescription('');
    setPriority('low');
  };

  return (
    <div className='add-task-container'>
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Task Name:
          <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} required />
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
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddTask;
