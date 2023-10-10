import { createSlice } from '@reduxjs/toolkit';

import { NameSpace } from '../../../app/provider/store';

import { ProjectType } from '../../../entities/project';
import { PROJECTS } from '../../../app/data/projects';

type InitialState = {
  projectsList: ProjectType[],
};

const initialState: InitialState = {
  projectsList: PROJECTS,
}

export const projectsSlice = createSlice({
  name: NameSpace.Projects,
  initialState,
  reducers: {
    // cartItemAdd: (state, action: PayloadAction<RatedCamera>) => {
    //   if (!state.cartList.some((item) => item.camera.id === action.payload.id)) {
    //     state.cartList = [...state.cartList, {camera: action.payload, quantity: 1}];
    //   }
    // },
  },
});
