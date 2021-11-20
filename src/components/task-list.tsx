import { useState } from 'react';
import type { Task } from '../store/task';
import { useTaskStore } from '../store/task';

const getLastThreeDates = arr => {
  return arr
    .filter(ele => new Date(ele.date) > new Date())
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 3);
};

export default function TaskList() {
  const tasks = useTaskStore();
  const [upcoming, setUpcoming] = useState(false);

  const taskList: Array<Task> = upcoming ? getLastThreeDates(tasks) : tasks;

  return (
    <div className='col-span-1 flex flex-col overflow-auto h-full ml-2.5 mr-2.5'>
      <div className='flex justify-between'>
        <button onClick={e => setUpcoming(true)} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded shadow-lg'>
          Upcoming
        </button>
        <button onClick={e => setUpcoming(false)} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded shadow-lg'>
          All
        </button>
      </div>
      <div className='justify-center'>
        {taskList.map(task => (
          <div key={task.id} className='bg-gray-700 rounded overflow-hidden my-3 mx-2 shadow-lg'>
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2'>{task.name}</div>
              <p className='text-base'>{task.description}</p>
            </div>
            <div className='px-6 py-3'>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mx-1'>{new Date(task.date).toLocaleString()}</span>
              {new Date(task.date) < new Date() && <span className='inline-block bg-green-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mx-1'>completed</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
