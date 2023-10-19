import { PayloadAction, createSlice } from '@reduxjs/toolkit';

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
    createProject: (state, action: PayloadAction<ProjectType>) => {
      state.projectsList = state.projectsList.toSpliced(state.projectsList.length, 0, action.payload)
    },
    deleteProject: (state, action: PayloadAction<ProjectType>) => {
      state.projectsList = state.projectsList.filter(( project ) => project.id !== action.payload.id);
    },
  },
});

export const { createProject, deleteProject } = projectsSlice.actions;
