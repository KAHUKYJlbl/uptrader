import { Dispatch, SetStateAction, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, OutlinedInput } from '@mui/material';
import { nanoid } from 'nanoid';

import { handleModalClose } from '../../../shared/lib/utils/toggle-modal';
import { useAppDispatch } from '../../../shared/lib/hooks/use-app-dispatch';
import { createTask, getQueuePriority } from '../../../widgets/tasks-list';
import { TaskForm } from '../lib/types/task-form';
import { Oops } from '../../../widgets/oops';
import { useAppSelector } from '../../../shared/lib/hooks/use-app-selector';

type CreateTaskProps = {
  open: boolean;
  setClose: Dispatch<SetStateAction<boolean>>;
}

export const CreateTask = ({ open, setClose }: CreateTaskProps): JSX.Element => {
  const { id: projectId } = useParams();
  const dispatch = useAppDispatch();
  const { register, handleSubmit, reset } = useForm<TaskForm>();
  const [ fieldErrors, setFieldErrors ] = useState({
    name: false,
    description: false,
    attached: false,
    subtasks: false,
    });

  if (!projectId) {
    return <Oops type='error-boundary' />
  }

  const priority = useAppSelector((state) => getQueuePriority(state, projectId));

  // const handleClick = () => {
  //   if (name) {
  //     dispatch(createTask({name, id: nanoid()}));
  //     setName('');
  //     handleModalClose(setClose);
  //   }
  // }

  const onFormSubmit: SubmitHandler<TaskForm> = (data) => {
    dispatch(createTask({
      ...data,
      id: `${projectId}-${nanoid()}`,
      projectId,
      dateStart: null,
      dateEnd: null,
      dutyTime: null,
      priority,
      status: 'queue',
      // temporary
      subtasks: [],
      attached: [],
    }));

    reset();
    handleModalClose(setClose);
  };

  const onFormSubmitError: SubmitErrorHandler<TaskForm> = (errors) => {
    setFieldErrors({
      name: !!errors.name,
      description: !!errors.description,
      attached: !!errors.attached,
      subtasks: !!errors.subtasks,
    });
  };

  return (
    <Dialog
      open={open}
      onClose={() => handleModalClose(setClose)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      scroll='paper'
      fullWidth
    >
      <Box component='form' onSubmit={handleSubmit(onFormSubmit, onFormSubmitError)}>
        <DialogTitle id="modal-modal-title">
          New task
        </DialogTitle>

        <DialogContent>
          <FormControl sx={{ mt: 1, mb: 1, width: '100%' }} variant="outlined" error={fieldErrors.name}>
            <InputLabel htmlFor="outlined-adornment-name">
              Name
            </InputLabel>

            <OutlinedInput
              id="outlined-adornment-name"
              type={'text'}
              label="Name"
              {...register('name', {required: true})}
            />
          </FormControl>

          <FormControl sx={{ mt: 1, mb: 1, width: '100%' }} variant="outlined" error={fieldErrors.description}>
            <InputLabel htmlFor="outlined-adornment-description">
              Description
            </InputLabel>

            <OutlinedInput
              id="outlined-adornment-description"
              type={'text'}
              label="Description"
              {...register('description', {required: true})}
            />
          </FormControl>
        </DialogContent>

        <DialogActions sx={{mr: "16px"}}>
          <Button type='submit'>Create</Button>
        </DialogActions>
      </Box>

    </Dialog>
  )
}
