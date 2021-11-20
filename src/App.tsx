import TaskCreate from './components/task-create';
import TaskList from './components/task-list';

function App() {
  return (
    <div className='bg-gray-800 h-screen min-h-full text-white grid md:grid-flow-col grid-flow-row gap-2'>
      <TaskCreate />
      <TaskList />
    </div>
  );
}

export default App;
