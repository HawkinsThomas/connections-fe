import Box from '@mui/material/Box';
import { observer } from 'mobx-react-lite';
import { useMst } from 'hooks/useMst';
import Ball from 'components/Ball/Ball';

const styles = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  mb: 1,
  minWidth: '96px',
};

function MistakesRemainingView() {
  const {
    selectedGame: { mistakesRemaining },
  } = useMst();

  return (
    <Box sx={styles}>
      {Array.from({ length: mistakesRemaining }).map((_, index) => (
        <Ball key={index} index={index} />
      ))}
    </Box>
  );
}

export default observer(MistakesRemainingView);
