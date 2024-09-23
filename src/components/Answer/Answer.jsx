import { Box, Typography } from '@mui/material';
import { useMst } from 'hooks/useMst';
import { observer } from 'mobx-react-lite';

function Answer({ index }) {
  const { answers } = useMst();
  return (
    <Box
      sx={{
        m: 0.2,
        maxWidth: '124px',
        minWidth: '124px',
        minHeight: '32px',
        border: '2px solid orange',
        display: 'flex',
        borderRadius: '8px',
      }}
    >
      <Typography variant="subtitle1" sx={{ m: 'auto' }}>
        {answers[index]}
      </Typography>
    </Box>
  );
}

export default observer(Answer);
