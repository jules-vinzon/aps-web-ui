import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './root-reducer'; // Adjust the import based on your structure

const store = configureStore({
  reducer: rootReducer,
});

export { store };
