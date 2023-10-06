import { combineReducers } from '@reduxjs/toolkit';

import { projectsSlice } from '../../../../widgets/projects-list';

import { NameSpace } from '../lib/name-space';

export const rootReducer = combineReducers({
  [NameSpace.Projects]: projectsSlice.reducer,
  // [NameSpace.Tasks]: projectsSlice.reducer,
  // [NameSpace.Comments]: projectsSlice.reducer,
});
