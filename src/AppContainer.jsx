import { Box } from '@mui/material';
// import AnswerGenerator from './components/AnswerGenerator/AnswerGenerator';
import GameBoard from 'components/GameBoard/GameBoard';

function AppContainer() {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        // backgroundColor: '#B388EB',
        backgroundColor: '#242331',
        m: 0,
        p: 0,
        overflow: 'scroll',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <GameBoard />
    </Box>
  );
}

export default AppContainer;
