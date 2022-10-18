import { configureStore } from '@reduxjs/toolkit';
import navigatorReducer from './navigator-slice';
export const configuredStore = configureStore({
  reducer: {
    navigator: navigatorReducer
  }
});

export type RootState = ReturnType<typeof configuredStore.getState>;

export type AppDispatch = typeof configuredStore.dispatch;
