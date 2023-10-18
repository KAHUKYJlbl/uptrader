import { PropsWithChildren, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Box, Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Fade, FormControl, InputLabel, Link, OutlinedInput, Toolbar } from '@mui/material';

import { Svg } from '../../../shared/ui/svg';
import { AppRoute } from '../../../app/provider/router';
import { handleModalOpen } from '../../../shared/lib/utils/toggle-modal';
import { CreateProject } from '../../../features/create-project';

type LayoutProps = PropsWithChildren & {
  page: "project" | "task",
};

export const Layout = ({page, children}: LayoutProps): JSX.Element => {
  const [newProjectOpen, setNewProjectOpen] = useState(false);
  const [newTaskOpen, setNewTaskOpen] = useState(false);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{backgroundColor: '#c9ccd0', mb: '20px'}}>
            <Toolbar sx={{pt: '20px', pb: '20px', pl: '20px'}}>
              <Box sx={{ flexGrow: 1 }}>
                <Link component={RouterLink} to={ AppRoute.Main } underline='none'>
                  <Svg sx={{width: '174px'}} />
                </Link>
              </Box>

              <Button
                color="info"
                variant="outlined"
                onClick={() => handleModalOpen(
                  page === 'task'
                  ? setNewTaskOpen
                  : setNewProjectOpen
                )}
              >
                {`new ${page}`}
              </Button>
            </Toolbar>
        </AppBar>
      </Box>

      <Container maxWidth='md'>
        {children}
      </Container>

      <CreateProject open={newProjectOpen} setClose={setNewProjectOpen} />
    </>
  )
};
