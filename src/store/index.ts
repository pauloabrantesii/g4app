import { configureStore } from '@reduxjs/toolkit';
import { RootState } from '../types';
import authReducer from './authSlice';
import customerReducer from './customerSlice';
import favoritesReducer from './favoritesSlice';
const store = configureStore({
  reducer: {
    auth: authReducer,
    customer: customerReducer,
    favorites: favoritesReducer,
  },

});

export type AppDispatch = typeof store.dispatch;
export type AppState = RootState;

export default store; 