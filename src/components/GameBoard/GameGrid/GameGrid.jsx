import Box from '@mui/material/Box';
import { observer } from 'mobx-react-lite';
import GameRow from './GameRow/GameRow';

function GameGrid() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', mb: 2 }}>
      <GameRow rowIndex={0} />
      <GameRow rowIndex={1} />
      <GameRow rowIndex={2} />
      <GameRow rowIndex={3} />
    </Box>
  );
}

export default observer(GameGrid);
