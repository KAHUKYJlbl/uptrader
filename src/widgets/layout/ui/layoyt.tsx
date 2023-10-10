import { AppBar, Container } from '@mui/material';
import { Svg } from '../../../shared/ui/svg';

type LayoutProps = {
  children: JSX.Element,
};

export const Layout = ({children}: LayoutProps): JSX.Element => (
  <>
    <AppBar position="static" sx={{backgroundColor: '#c9ccd0', mb: '20px'}}>
      <Container maxWidth='md' sx={{pt: '20px', pb: '20px'}}>
        <Svg sx={{width: '174px'}} />
      </Container>
    </AppBar>

    <Container maxWidth='md'>
      {children}
    </Container>
  </>
);
