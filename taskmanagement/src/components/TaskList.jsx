import  { useContext } from 'react';
import { TaskContext } from './TaskContext';

const TaskList = () => {
  const { tasks, toggleTask, deleteTask } = useContext(TaskContext);

  return (
    <div className='nav-container'>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.name}
            </span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
