import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import counterReducer from './slice/counter-slice';
import userReducer from './slice/user-slice';
import { PersistConfig } from 'redux-persist/es/types';
import storage from 'redux-persist/es/storage';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist/es/constants';
import { authService } from '../user/service/auth.service';

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

const persistConfig: PersistConfig<any> = {
  key: 'root',
  storage: storage,
  whitelist: ['counter', 'user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: authService,
      },
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
