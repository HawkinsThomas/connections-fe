import { Box, Typography } from '@mui/material';
import { useMst } from 'hooks/useMst';
import { observer } from 'mobx-react-lite';
import Answer from './Answer';
import { v4 } from 'uuid';

function AnswersDisplay({ indexes }) {
  const { answers, areAnswersLoading } = useMst();

  if (areAnswersLoading) {
    return <Typography>Loading</Typography>;
  }

  if (!answers?.length) {
    return <Box sx={{ height: '32px' }}></Box>;
  }

  if (!indexes || indexes?.length === 0) {
    return (
      <Box sx={{ height: '32px', display: 'flex', mt: '8px' }}>
        {answers.map((_, index) => (
          <Answer index={index} key={v4()} />
        ))}
      </Box>
    );
  }

  return (
    <Box sx={{ height: '32px', display: 'flex', mt: '8px' }}>
      {indexes.map((index) => (
        <Answer index={index} key={v4()} />
      ))}
    </Box>
  );
}

export default observer(AnswersDisplay);
