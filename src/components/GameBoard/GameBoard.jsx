import Box from '@mui/material/Box';
import GameGrid from './GameGrid/GameGrid';
import { observer } from 'mobx-react-lite';
import MistakesView from './MistakesRemainingView';
import { Typography } from '@mui/material';
import ButtonPanel from './ButtonPanel/ButtonPanel';
import Marquee from 'react-fast-marquee';

function GameBoard() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* <Marquee gradient gradientColor="#242331" style={{ height: '55px' }} speed={10} direction="right"> */}
      <Typography variant="h7" color="grey.500" sx={{ mb: 2 }}>
        Create four groups of four!
      </Typography>
      {/* </Marquee> */}
      <GameGrid />
      <MistakesView />
      <ButtonPanel />
    </Box>
  );
}

export default observer(GameBoard);
