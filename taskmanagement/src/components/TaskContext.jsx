import { createContext, useState } from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), ...task, completed: false }]);
  };

  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const editTask = (taskId, updatedTask) => {
    setTasks(
      tasks.map((task) => (task.id === taskId ? { ...task, ...updatedTask } : task))
    );
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTask, deleteTask, editTask }}>
      {children}
    </TaskContext.Provider>
  );
};
