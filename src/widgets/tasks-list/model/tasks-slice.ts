import { createSlice } from '@reduxjs/toolkit';

import { NameSpace } from '../../../app/provider/store';

import { TaskType } from '../../../entities/task';
import { TASKS } from '../../../app/data/tasks';

type InitialState = {
  projectsList: TaskType [],
};

const initialState: InitialState = {
  projectsList: TASKS,
}

export const tasksSlice = createSlice({
  name: NameSpace.Tasks,
  initialState,
  reducers: {
    // cartItemAdd: (state, action: PayloadAction<RatedCamera>) => {
    //   if (!state.cartList.some((item) => item.camera.id === action.payload.id)) {
    //     state.cartList = [...state.cartList, {camera: action.payload, quantity: 1}];
    //   }
    // },
  },
});
