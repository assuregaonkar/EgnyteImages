import { configureStore } from '@reduxjs/toolkit';
import imageReducer from './reducer.js';

const store = configureStore({
  reducer: {
    images: imageReducer,
  },
});

export default store;
