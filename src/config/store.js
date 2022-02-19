import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counterSlice';
import restaurantReducer from '../features/restaurantSlice';
export const store = configureStore({
  reducer: { 
      counter: counterReducer,
      restaurant:restaurantReducer
    },
})