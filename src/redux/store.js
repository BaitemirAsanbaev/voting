// store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer'; // Import your root reducer
import thunk from 'redux-thunk'; // Example middleware

// Configure middleware (you can add more middleware as needed)
const middleware = [thunk];

// Create the Redux store
const store = configureStore({
  reducer: rootReducer, // Combined reducers
  middleware: [...middleware],
  devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools in development
});

export default store;
