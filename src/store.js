import { configureStore } from '@reduxjs/toolkit';
import imageReducer from './reducer.js';
import ActiveExperiment from './reducer/activeExperiment.js'

const store = configureStore({
  reducer: {
    images: imageReducer,
    activeExperiment: ActiveExperiment,
  },
});

export default store;
