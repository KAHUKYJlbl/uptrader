import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material'

import { useAppDispatch } from '../../../shared/lib/hooks/use-app-dispatch';
import { deleteTask } from '../../../widgets/tasks-list';

import { TaskType } from '..'

type TaskProps = {
  task: TaskType;
}

export const Task = ({ task }: TaskProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>, task: TaskType) => {
    e.preventDefault();
    dispatch(deleteTask(task));
  }

  return (
    <Card sx={{ minWidth: 200, width: "100%", boxShadow: '0 0 8px #c9ccd0' }} >
      <CardContent>
        <Typography variant="h5" gutterBottom noWrap>
          {task.name}
        </Typography>

        <Typography component="div" variant="body2" sx={{textAlign: 'end'}}>
          subtasks: {task.subtasks.length}
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
                onClick={(e) => handleDelete(e, task)}
              >
                Delete
              </Button>
            </Grid>
          </Grid>
        </CardActions>
    </Card>
  )
}
