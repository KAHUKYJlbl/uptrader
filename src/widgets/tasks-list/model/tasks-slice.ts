import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { NameSpace } from '../../../app/provider/store';
import { TaskType } from '../../../entities/task';
import { TASKS } from '../../../app/data/tasks';

type InitialState = {
  tasksList: TaskType[],
};

const initialState: InitialState = {
  tasksList: TASKS,
}

export const tasksSlice = createSlice({
  name: NameSpace.Tasks,
  initialState,
  reducers: {
    changePriority: (state, action: PayloadAction<TaskType>) => {
      state.tasksList = [
        ...state.tasksList.filter(( task ) => task.projectId !== action.payload.projectId),
        ...state.tasksList.filter(( task ) =>
          task.projectId === action.payload.projectId
          && task.status !== action.payload.status
          && task.id !== action.payload.id
        ),
        ...state.tasksList
          .filter(( task ) =>
            task.projectId === action.payload.projectId
            && task.status === action.payload.status
            && task.id !== action.payload.id
          )
          .toSpliced(action.payload.priority, 0, action.payload)
          .map(( task, index ) => ({...task, priority: index}))
      ];
    },
    // taskEdit: (state, action: PayloadAction<TaskType>) => {
    //   state.tasksList = state.tasksList
    //     .filter(( task ) => task.id !== action.payload.id)
    //     .p
    // },
  },
});

export const { changePriority } = tasksSlice.actions;
