import { Card, CardContent, Typography, Link, CardActions, Button, Grid } from '@mui/material';

import type { ProjectType } from '../lib/project-type';
import { Link as RouterLink, generatePath } from 'react-router-dom';
import { AppRoute } from '../../../app/provider/router';
import { useAppDispatch } from '../../../shared/lib/hooks/use-app-dispatch';
import { deleteProject } from '../../../widgets/projects-list';

type ProjectProps = {
  project: ProjectType;
};

export const Project = ({ project }: ProjectProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>, project: ProjectType) => {
    e.preventDefault();
    dispatch(deleteProject(project));
  }

  return (
    <Link component={RouterLink} to={generatePath(AppRoute.Tasks, {id: project.id})} underline='none'>
      <Card sx={{ minWidth: 275, boxShadow: '0 0 8px #c9ccd0' }} >
        <CardContent>
          <Typography variant="h5" gutterBottom noWrap>
            {project.name}
          </Typography>

          <Typography component="div" variant="body2" sx={{textAlign: 'end'}}>
            tasks: {`NaN/NaN`}
          </Typography>
        </CardContent>

        <CardActions sx={{p: "16px"}}>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Button
                size="small"
                variant="outlined"
                color='info'
              >
                Edit
              </Button>
            </Grid>

            <Grid item>
              <Button
                size="small"
                variant="outlined"
                color='error'
                onClick={(e) => handleDelete(e, project)}
              >
                Delete
              </Button>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </Link>
  )
}
