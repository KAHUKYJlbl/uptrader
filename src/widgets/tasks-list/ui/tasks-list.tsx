import { useParams } from 'react-router-dom';
import { Grid, Paper, Typography } from '@mui/material';
import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd'

import { useAppSelector } from '../../../shared/lib/hooks/use-app-selector';
import { Task } from '../../../entities/task';

import { getTasksByProject } from '../model/tasks-selectors';
import { TASK_STATUSES } from '../lib/const';

export const TasksList = (): JSX.Element => {
  const { id } = useParams();
  const tasks = useAppSelector((state) => getTasksByProject(state, id || '0'));
  const statuses = Array.from(TASK_STATUSES);

  return (
    // общий контейнер
    <DragDropContext onDragEnd={() => null}>
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

                <Droppable droppableId={status}>
                  {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                      {
                        tasks
                          .filter(( task ) => task.status === status)
                          .map(( task, index ) => (
                            // таск-элемент
                            <Draggable key={task.id} draggableId={task.id} index={index}>
                              {(provided) => (
                                <div
                                  draggable
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  ref={provided.innerRef}
                                >
                                  <Grid
                                    item
                                    component="div"
                                    sx={{ mb: "10px", cursor: "grab" }}
                                  >
                                    <Task task={task} />
                                  </Grid>
                                </div>
                              )}
                            </Draggable>
                          ))
                      }
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </Paper>
            </Grid>
          ))
        }
      </Grid>
    </DragDropContext>
  )
}
