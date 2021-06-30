import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import userReducer from '../features/users/userSlice';

export const store = configureStore({
  reducer: {
    users: userReducer
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      // Ignore these action types
      ignoredActions: ['users/login/fulfilled']
    }
  })
});
