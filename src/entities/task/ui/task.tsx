import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'

import { TaskType } from '..'

type TaskProps = {
  task: TaskType;
}

export const Task = ({ task }: TaskProps): JSX.Element => {
  return (
    <Card sx={{ minWidth: 200, width: "100%", boxShadow: '0 0 8px #c9ccd0' }} >
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {task.name}
        </Typography>

        <Typography component="div" variant="body2" sx={{textAlign: 'end'}}>
          subtasks: {task.subtasks.length}
        </Typography>
      </CardContent>

      <CardActions>
        <Button
          size="small"
          variant="outlined"
          color='info'
          // sx={{color: "#5accd0"}}
        >
          Edit
        </Button>
      </CardActions>
    </Card>
  )
}
