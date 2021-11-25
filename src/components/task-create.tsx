import { useState } from 'react';
import { useTaskDispatch } from '../store/task';

const TaskCreate = () => {
  const { addTask } = useTaskDispatch();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (name && description && date && time) {
      addTask({ name, description, date, time });
      // setName('');
      // setDescription('');
      // setDate('');
      // setTime('');
    } else {
      alert('Please fill all the fields');
    }
  };

  return (
    <div className='md:col-span-2 justify-center items-center grid grid-flow-row ml-2.5 mr-2.5'>
      <div className='md:row-span-2 text-center'>
        <h1 className='text-5xl font-bold'>Task Creater</h1>
      </div>
      <form className='md:row-span-3 pr-3' onSubmit={handleSubmit}>
        <input type='text' value={name} onChange={e => setName(e.target.value)} className='input' placeholder='Task Name' />
        <textarea rows={4} value={description} onChange={e => setDescription(e.target.value)} cols={50} className='input' placeholder='Description' />
        <input type='date' value={date} onChange={e => setDate(e.target.value)} className='input' placeholder='Select date' />
        <input type='time' value={time} onChange={e => setTime(e.target.value)} className='input' placeholder='Select date' />
        <span className='flex justify-center'>
          <button type='submit' className='btn-blue'>
            Create Task
          </button>
        </span>
      </form>
    </div>
  );
};

export default TaskCreate;
