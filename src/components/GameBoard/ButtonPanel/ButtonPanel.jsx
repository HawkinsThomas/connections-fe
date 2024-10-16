import Box from '@mui/material/Box';
import { observer } from 'mobx-react-lite';
import { Button } from '@mui/material';
import { useMst } from 'hooks/useMst';
import * as React from 'react';

function ButtonPanel() {
  const {
    selectedGame: { isSubmitEnabled, submitGroupHandler, shuffleTiles, swapTiles, isShuffling },
  } = useMst();

  React.useEffect(() => {}, [isShuffling]);
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <Button disabled={!isSubmitEnabled} variant="outlined" onClick={() => submitGroupHandler()} sx={{ m: 0.5 }}>
        Submit
      </Button>
      <Button variant="outlined" onClick={() => shuffleTiles()} sx={{ m: 0.5 }} disabled={isShuffling}>
        Shuffle
      </Button>
      <Button variant="outlined" onClick={() => swapTiles()} sx={{ m: 0.5 }} disabled={!isSubmitEnabled}>
        Swap
      </Button>
    </Box>
  );
}

export default observer(ButtonPanel);
