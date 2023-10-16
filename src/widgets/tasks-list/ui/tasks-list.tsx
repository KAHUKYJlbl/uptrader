import { useParams } from 'react-router-dom';
import { Grid, Paper, Typography } from '@mui/material';
import { DragDropContext, Draggable, DropResult, Droppable } from '@hello-pangea/dnd'

import { useAppSelector } from '../../../shared/lib/hooks/use-app-selector';
import { useAppDispatch } from '../../../shared/lib/hooks/use-app-dispatch';
import { Task, TaskStatusType } from '../../../entities/task';

import { getTasksByProject } from '../model/tasks-selectors';
import { changePriority } from '../model/tasks-slice';
import { TASK_STATUSES } from '../lib/const';

export const TasksList = (): JSX.Element => {
  const { id: projectId } = useParams();
  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state) => getTasksByProject(state, projectId || '0'));
  const statuses = Array.from(TASK_STATUSES);

  const handleDragEnd = ({ destination, source, draggableId }: DropResult) => {
    if ( !destination ) {
      return;
    }

    if ( destination.droppableId === source.droppableId && destination.index === source.index ) {
      return;
    }

    const currentTask = tasks.find(( task ) => task.id === draggableId);

    if ( currentTask ) {
      dispatch(changePriority({
        ...currentTask,
        priority: destination.index,
        status: destination.droppableId as TaskStatusType
      }));
    }
  }

  return (
    // общий контейнер
    <DragDropContext onDragEnd={handleDragEnd}>
      <Grid container spacing={2}>
        {
          statuses.map(( status, _index, array ) => (
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
                    <div
                      className='h-100'
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                    >
                      {
                        tasks
                          .filter(( task ) => task.status === status)
                          .map(( task, index ) => (
                            // таск-элемент
                            <Draggable key={task.id} draggableId={task.id} index={index}>
                              {(provided) => (
                                <div
                                  className='mb-10'
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  ref={provided.innerRef}
                                >
                                  <Grid
                                    item
                                    component="div"
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
