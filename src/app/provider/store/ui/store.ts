import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from '../model/root-reducer';

export const store = configureStore({
  reducer: rootReducer,
});
