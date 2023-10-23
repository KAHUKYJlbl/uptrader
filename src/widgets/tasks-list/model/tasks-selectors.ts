import { createSelector } from '@reduxjs/toolkit';
import { NameSpace, State } from '../../../app/provider/store';

import { TaskType } from '../../../entities/task';

export const getTasks = (state: State): TaskType[] => state[NameSpace.Tasks].tasksList;

export const getTasksByProject = createSelector(
  [
    getTasks,
    (_state: State, id: string) => id,
  ],
  (tasks, id) => tasks
    .filter(( task ) => task.projectId === id)
    .sort(( a, b ) => a.priority - b.priority)
);

export const getQueuePriority = createSelector(
  [
    getTasks,
    (_state: State, id: string) => id,
  ],
  (tasks, id) => tasks
    .filter(( task ) => task.projectId === id && task.status === 'queue')
    .length
);
