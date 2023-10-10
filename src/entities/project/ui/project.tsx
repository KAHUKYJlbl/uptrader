import { Card, CardContent, Typography, Link } from '@mui/material';

import type { ProjectType } from '../lib/project-type';
import { Link as RouterLink, generatePath } from 'react-router-dom';
import { AppRoute } from '../../../app/provider/router';

type ProjectProps = {
  project: ProjectType;
};

export const Project = ({ project }: ProjectProps): JSX.Element => {
  return (
    <Link component={RouterLink} to={generatePath(AppRoute.Tasks, {id: project.id})} underline='none'>
      <Card sx={{ minWidth: 275, boxShadow: '0 0 8px #c9ccd0' }} >
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {project.name}
          </Typography>

          <Typography component="div" variant="body2" sx={{textAlign: 'end'}}>
            tasks: {`NaN/NaN`}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  )
}
