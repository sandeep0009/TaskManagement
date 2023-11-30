import { Routes, Route, Link } from 'react-router-dom';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import EditTask from './components/EditTask';
import { TaskProvider } from './components/TaskContext';
import "./App.css"

const App = () => {
  return (
    <TaskProvider>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Task List</Link>
            </li>
            <li>
              <Link to="/add">Add Task</Link>
            </li>
          </ul>
        </nav>


        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/add" element={<AddTask />} />
          <Route
            path="/edit/:id"
            element={<EditTask />}
            // Include your logic to pass props here, e.g., using render or component
          />
        </Routes>
      </div>
    </TaskProvider>
  );
};

export default App;
