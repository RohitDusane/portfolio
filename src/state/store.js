// src/state/store.js
import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './menuSlice'; // Replace with your slice

const store = configureStore({
  reducer: {
    menu: menuReducer, // Add your reducers here
  },
});

export default store;