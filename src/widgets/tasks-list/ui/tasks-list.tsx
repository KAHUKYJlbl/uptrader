import { Grid, Paper, Typography } from '@mui/material';

import { useAppSelector } from '../../../shared/lib/hooks/use-app-selector';
import { Task } from '../../../entities/task';

import { getTasksByProject } from '../model/tasks-selectors';
import { TASK_STATUSES } from '../lib/const';
import { useParams } from 'react-router-dom';

export const TasksList = (): JSX.Element => {
  const { id } = useParams();
  const tasks = useAppSelector((state) => getTasksByProject(state, id || '0'));
  const statuses = Array.from(TASK_STATUSES);

  return (
    // общий контейнер
    <Grid container spacing={2}>
      {
        statuses.map(( status, index, array ) => (
          // контейнеры со статусами выполнения
          <Grid container item xs={ 12 / array.length } key={status} direction={'column'}>
            <Paper elevation={3} sx={{p: '10px', height: 1, minHeight: "80vh"}} >
              <Typography
                variant="h4"
                gutterBottom
                textAlign="center"
                textTransform="uppercase"
                color="#5accd0"
                sx={{textDecorationLine: "underline"}}
              >
                {status}
              </Typography>

              {
                tasks
                  .filter(( task ) => task.status === status)
                  .map(( task ) => (
                    // таск-элемент
                    <Grid
                      item
                      component="div"
                      draggable
                      key={task.id}
                      sx={{ mb: "10px", cursor: "grab" }}
                    >
                      <Task task={task} />
                    </Grid>
                  ))
              }
            </Paper>
          </Grid>
        ))
      }
    </Grid>
  )
}
