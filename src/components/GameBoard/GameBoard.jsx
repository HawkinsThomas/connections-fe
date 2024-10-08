import Box from '@mui/material/Box';
import GameGrid from './GameGrid/GameGrid';
import { observer } from 'mobx-react-lite';
import MistakesView from './MistakesRemainingView';
import { Typography } from '@mui/material';
import ButtonPanel from './ButtonPanel/ButtonPanel';

function GameBoard() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h7" color="grey.500" sx={{ mb: 2 }}>
        Create four groups of four!
      </Typography>
      <GameGrid />
      <MistakesView />
      <ButtonPanel />
    </Box>
  );
}

export default observer(GameBoard);
