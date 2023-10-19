import { Dispatch, SetStateAction, useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, OutlinedInput } from '@mui/material';
import { nanoid } from 'nanoid';

import { handleModalClose } from '../../../shared/lib/utils/toggle-modal';
import { useAppDispatch } from '../../../shared/lib/hooks/use-app-dispatch';
import { createTask } from '../../../widgets/tasks-list';

type CreateTaskProps = {
  open: boolean;
  setClose: Dispatch<SetStateAction<boolean>>;
}

export const CreateTask = ({ open, setClose }: CreateTaskProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState('');

  const handleClick = () => {
    if (name) {
      dispatch(createTask({name, id: nanoid()}));
      setName('');
      handleModalClose(setClose);
    }
  }

  return (
    <Dialog
      open={open}
      onClose={() => handleModalClose(setClose)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      scroll='paper'
      fullWidth
    >
      <DialogTitle id="modal-modal-title">
        New task
      </DialogTitle>

      <DialogContent>
        <FormControl sx={{ mt: 1, mb: 1, width: '100%' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-name">
            Name
          </InputLabel>

          <OutlinedInput
            id="outlined-adornment-name"
            type={'text'}
            label="Name"
            value={name}
            onInput={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
          />
        </FormControl>
      </DialogContent>

      <DialogActions sx={{mr: "16px"}}>
        <Button onClick={handleClick}>Create</Button>
      </DialogActions>

    </Dialog>
  )
}
