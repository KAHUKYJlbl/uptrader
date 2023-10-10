import { Grid } from '@mui/material';

import { useAppSelector } from '../../../shared/lib/hooks/use-app-selector';

import { getProjects } from '../model/tasks-selectors';
import { Project } from '../../../entities/project';

export const TasksList = (): JSX.Element => {
  const projects = useAppSelector(getProjects);

  return (
    <Grid container spacing={2}>
      {
        projects.map(( project ) => (
          <Grid item xs={4} key={project.id}>
            <Project project={project} />
          </Grid>
        ))
      }
    </Grid>
  )
}
