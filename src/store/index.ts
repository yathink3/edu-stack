import { configureStore } from '@reduxjs/toolkit';
import { debounce } from 'debounce';
import { loadState, saveState } from '../browser-storage';
import taskSliceReducer from './task';

const store = configureStore({
  reducer: {
    taskData: taskSliceReducer,
  },
  preloadedState: loadState(),
});

store.subscribe(
  debounce(() => {
    console.log('store changed', store.getState());
    saveState(store.getState());
  }, 1000)
);

export default store;
