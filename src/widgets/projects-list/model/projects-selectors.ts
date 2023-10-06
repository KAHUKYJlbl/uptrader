import { NameSpace, State } from '../../../app/provider/store';

import { ProjectType } from '../lib/types/project-type';

export const getProjects = (state: State): ProjectType[] => state[NameSpace.Projects].projectsList;
