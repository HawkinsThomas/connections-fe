import Box from '@mui/material/Box';
import { observer } from 'mobx-react-lite';
import { useMst } from 'hooks/useMst';
import Ball from 'components/Ball/Ball';

function MistakesRemainingView() {
  const {
    selectedGame: { mistakesRemaining },
  } = useMst();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', mb: 1 }}>
      {Array.from({ length: mistakesRemaining }).map((_, index) => (
        <Ball key={index} />
      ))}
    </Box>
  );
}

export default observer(MistakesRemainingView);
