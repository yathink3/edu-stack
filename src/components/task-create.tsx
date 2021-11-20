import { useState } from 'react';
import { useTaskDispatch } from '../store/task';

export default function TaskCreate() {
  const { addToTask } = useTaskDispatch();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log({ name, description, date, time });
    if (name && description && date && time) {
      addToTask({ name, description, date, time });
      setName('');
      setDescription('');
      setDate('');
      setTime('');
    } else {
      alert('Please fill all the fields');
    }
  };

  return (
    <div className='md:col-span-2 justify-center items-center grid grid-flow-row'>
      <div className='md:row-span-2 justify-center '>
        <h1 className='text-5xl font-bold'>Task Creater</h1>
      </div>
      <form className='md:row-span-3' onSubmit={handleSubmit}>
        <input type='text' value={name} onChange={e => setName(e.target.value)} className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 m-2 shadow-lg' placeholder='Task Name' />
        <textarea rows={4} value={description} onChange={e => setDescription(e.target.value)} cols={50} className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 m-2 shadow-lg' placeholder='Description' />
        <input type='date' value={date} onChange={e => setDate(e.target.value)} className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 m-2 shadow-lg' placeholder='Select date' />
        <input type='time' value={time} onChange={e => setTime(e.target.value)} className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 m-2 shadow-lg' placeholder='Select date' />
        <span className='flex justify-center'>
          <input type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded shadow-lg' value='Create Task' />
        </span>
      </form>
    </div>
  );
}
