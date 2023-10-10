import { NameSpace, State } from '../../../app/provider/store';

import { ProjectType } from '../../../entities/project';

export const getProjects = (state: State): ProjectType[] => state[NameSpace.Projects].projectsList;
