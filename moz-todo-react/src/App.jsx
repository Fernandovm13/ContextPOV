import AddTask from './components/AddTask.jsx';
import TaskList from './components/TaskList.jsx';
import { TasksProvider } from './components/TasksContext.jsx';

export default function TaskApp() {
  return (
    <TasksProvider>
      <h1>Lista de tareas</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}
