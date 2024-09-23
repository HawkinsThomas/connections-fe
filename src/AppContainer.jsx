import { Box } from '@mui/material';
import AnswerGenerator from './components/AnswerGenerator/AnswerGenerator';

function AppContainer() {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        backgroundColor: '#242424',
        m: 0,
        p: 0,
        overflow: 'scroll',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <AnswerGenerator />
    </Box>
  );
}

export default AppContainer;
