import { configureStore } from '@reduxjs/toolkit';
import { RootState } from '../types';
import authReducer from './authSlice';
import customerReducer from './customerSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    customer: customerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

export type AppDispatch = typeof store.dispatch;
export type AppState = RootState;

export default store; 