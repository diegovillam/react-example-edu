import { TaskProvider } from './context/TaskContext';
import TaskList from './components/TaskList/TaskList';

function App() {
  return (
    <TaskProvider>
      <TaskList />
    </TaskProvider>
  );
}

export default App;
