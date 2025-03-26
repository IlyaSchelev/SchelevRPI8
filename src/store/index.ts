import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';

// Создаём стор
export const store = configureStore({
  reducer,
});

// Типы для хуков
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;