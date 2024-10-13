import * as React from 'react';
import Box from '@mui/material/Box';
import { observer } from 'mobx-react-lite';
import clsx from 'clsx';
import { useAnimateOnce } from 'hooks/useAnimateOnce';
import { useMst } from 'hooks/useMst';

const ballStyles = {
  backgroundColor: 'orange',
  borderRadius: '50%',
  height: '8px',
  width: '8px',
  m: 1,
  boxShadow: '0 0 0 0 rgba(228, 174, 58, 1)',
  transform: 'scale(1)',
  animation: 'none',
  '&.isAnimating': {
    animation: 'pulse 2s forwards',
  },
  '@keyframes pulse': {
    '0%': {
      transform: 'scale(0.95)',
      boxShadow: '0 0 0 0px rgba(228, 174, 58, 0.7)',
    },
    '70%': {
      transform: 'scale(1)',
      boxShadow: '0 0 0 10px rgba(228, 174, 58, 0)',
    },
    '100%': {
      transform: 'scale(0.95)',
      boxShadow: '0 0 0 10px rgba(228, 174, 58, 0)',
    },
  },
};

function Ball({ index }) {
  const {
    selectedGame: { mistakesRemaining, isShuffling },
  } = useMst();
  const [isAnimating, setIsAnimating] = React.useState(false);
  useAnimateOnce({ isAnimating, setIsAnimating, timeout: 2000 });

  React.useEffect(() => {
    const t = setTimeout(() => setIsAnimating(true), index * 300);
    return () => clearTimeout(t);
  }, [mistakesRemaining, isShuffling]);

  useAnimateOnce({});
  return <Box sx={ballStyles} className={clsx({ isAnimating })} />;
}

export default observer(Ball);
