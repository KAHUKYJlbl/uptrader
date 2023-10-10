import { AppBar, Container, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import { Svg } from '../../../shared/ui/svg';
import { AppRoute } from '../../../app/provider/router';

type LayoutProps = {
  children: JSX.Element,
};

export const Layout = ({children}: LayoutProps): JSX.Element => (
  <>
    <AppBar position="static" sx={{backgroundColor: '#c9ccd0', mb: '20px'}}>
      <Container maxWidth='md' sx={{pt: '20px', pb: '20px'}}>
        <Link component={RouterLink} to={ AppRoute.Main } underline='none'>
          <Svg sx={{width: '174px'}} />
        </Link>
      </Container>
    </AppBar>

    <Container maxWidth='md'>
      {children}
    </Container>
  </>
);
