import { useState } from 'react';
import type { Task } from '../store/task';
import { useTaskDispatch, useTaskStore } from '../store/task';

const getLastThreeDates = (arr: Array<Task>) => {
  return arr
    .filter(ele => new Date(ele.date) > new Date())
    .sort((a, b) => new Date(a.date).valueOf() - new Date(b.date).valueOf())
    .slice(0, 3);
};

const TaskList = () => {
  const tasks = useTaskStore();
  const { removeTask } = useTaskDispatch();
  const [upcoming, setUpcoming] = useState(false);
  const taskList = upcoming ? getLastThreeDates(tasks) : tasks;

  return (
    <div className='col-span-1 flex flex-col overflow-auto h-full ml-2.5 mr-2.5'>
      <div className='flex justify-between'>
        <button onClick={e => setUpcoming(true)} className='btn-blue'>
          Upcoming
        </button>
        <button onClick={e => setUpcoming(false)} className='btn-blue'>
          All
        </button>
      </div>
      <div className='justify-center'>
        {taskList.map(task => (
          <div key={task.id} className='bg-gray-700 rounded overflow-hidden my-3 mx-2 shadow-lg'>
            <button onClick={e => removeTask(task.id)} className='bg-gray-800 hover:bg-gray-400  text-white hover:text-black text-center py-1.5 px-2.5 rounded-full h-10 w-10 inline-flex items-center float-right m-2'>
              <svg className='fill-current h-6 w-6' fill='#000000' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50' width='50px' height='50px'>
                <path d='M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z' />
              </svg>
            </button>
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2'>{task.name}</div>
              <p className='text-base'>{task.description}</p>
            </div>
            <div className='px-6 py-3'>
              <span className='chip bg-gray-200'>{new Date(task.date).toLocaleString()}</span>
              {new Date(task.date) < new Date() && <span className='chip bg-green-600'>completed</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
