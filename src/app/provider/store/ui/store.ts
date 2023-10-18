import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';

import { rootReducer } from '../model/root-reducer';
// import { NameSpace } from '../lib/name-space';

const persistConfig = {
  key: 'root',
  storage,
  // whitelist: [NameSpace.Projects]
};

const persistedReducer = persistReducer( persistConfig, rootReducer );

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore( store );
