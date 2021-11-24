import DarkModeToggle from './components/darkmode-toggler';
import TaskCreate from './components/task-create';
import TaskList from './components/task-list';

const App = () => {
  return (
    <div className='bg-blue-800 dark:bg-gray-800 h-screen min-h-full text-white grid md:grid-flow-col grid-flow-row gap-2'>
      <DarkModeToggle />
      <TaskCreate />
      <TaskList />
    </div>
  );
};

export default App;
