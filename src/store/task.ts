import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

export interface Task {
  id: number;
  name: string;
  description: string;
  date: Date;
}

interface TasksTemp {
  name: string;
  description: string;
  date?: string;
  time?: string;
}

const initialState: Array<Task> = [];

const TaskSlice = createSlice({
  name: 'TaskData',
  initialState,
  reducers: {
    addToTask: (state, { payload: taskTemp }: { payload: TasksTemp }) => {
      const task: Task = {
        id: state.length,
        name: taskTemp.name,
        description: taskTemp.description,
        date: new Date(`${taskTemp.date} ${taskTemp.time}`),
      };

      state.push(task);
    },
    removeTask: (state, { payload: id }: { payload: number }) => {
      state.splice(id, 1);
    },
  },
});

export default TaskSlice.reducer;

export const { addToTask, removeTask } = TaskSlice.actions;

export const useTaskDispatch = () => {
  const dispatch = useDispatch();
  return {
    addToTask: (task: TasksTemp) => dispatch(addToTask(task)),
    removeTask: (id: number) => dispatch(removeTask(id)),
  };
};

export const useTaskStore = () => {
  const data: Array<Task> = useSelector((state: any) => state.taskData);
  return data;
};
