import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { clsx } from 'clsx';
import { useMst } from 'hooks/useMst';
import { useAnimateOnce } from 'hooks/useAnimateOnce';

const styles = {
  display: 'flex',
  flexDirection: 'column',
  border: '2px solid',
  borderRadius: 2,
  minWidth: '150px',
  maxWidth: '150px',
  minHeight: '75px',
  maxHeight: '75px',
  alignItems: 'center',
  justifyContent: 'center',
  m: 0.5,
  backgroundColor: '#7A9E9F',
  borderColor: '#7A9E9F',
  '&.isSelected': {
    backgroundColor: '#56445D',
    borderColor: '#56445D',
    transform: 'scale(0.95)',
  },
  '&.isSolved': {
    backgroundColor: 'black',
    borderColor: 'black',
    '&:hover': {
      cursor: 'default ',
    },
  },
  transition: '0.3s ease',
  '&:hover': {
    cursor: 'pointer',
  },
  animation: 'none',
  '&.isAnimatingShake': {
    animation: 'shake 0.15s ease-in-out 3',
  },
  '&.isAnimatingShuffle': {
    animation: 'shuffle 1.5s ease-in-out 1',
  },
  '@keyframes shake': {
    '0%': {
      transform: 'translateX(0px) scale(0.95)',
    },
    '25%': {
      transform: 'translateX(5px) scale(0.95)',
    },
    '50%': {
      transform: 'translateX(0px) scale(0.95)',
    },
    '75%': {
      transform: 'translateX(-5px) scale(0.95)',
    },
    '100%': {
      transform: 'translateX(0px) scale(0.95)',
    },
  },
  '@keyframes shuffle': {
    '0%': {
      opacity: 1,
    },
    '30%': {
      opacity: 0,
    },
    '70%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  },
};

const getSwapStyles = ({ x, y, id, isSelected }) => {
  const animationName = `swap-${id.replace(' ', '-')}`;
  return {
    '&.isAnimatingSwap': {
      animation: `${animationName} 0.5s ease-in-out`,
    },
    [`@keyframes ${animationName}`]: {
      from: {
        transform: `translate(0, 0) ${isSelected ? 'scale(0.95)' : ''}`,
      },
      to: {
        transform: `translate(${x * 162}px, ${y * 87}px) ${isSelected ? 'scale(0.95)' : ''}`,
      },
    },
  };
};

function Tile({ rowIndex, columnIndex }) {
  const {
    selectedGame: { tileOnClickHandler, getTileByIndex },
  } = useMst();

  const tile = getTileByIndex(rowIndex, columnIndex);

  const {
    isSelected,
    isAnimatingSwap,
    isAnimatingShake,
    isAnimatingShuffle,
    setIsAnimatingShake,
    setIsAnimatingShuffle,
    setIsAnimatingSwap,
    isSolved,
    xOffset,
    yOffset,
    text,
  } = tile;

  // React.useEffect(() => {
  //   setSwapStyles(getSwapStyles(xOffset, yOffset));
  // }, [swapStyles, setSwapStyles, xOffset, yOffset]);

  useAnimateOnce({ isAnimating: isAnimatingShake, setIsAnimating: setIsAnimatingShake, timeout: 450 });
  useAnimateOnce({ isAnimating: isAnimatingShuffle, setIsAnimating: setIsAnimatingShuffle, timeout: 1500 });
  useAnimateOnce({ isAnimating: isAnimatingSwap, setIsAnimating: setIsAnimatingSwap, timeout: 1000 });
  return (
    <Box
      sx={{ ...styles, ...getSwapStyles({ x: xOffset, y: yOffset, id: text, isSelected }) }}
      className={clsx({ isSelected, isAnimatingShake, isSolved, isAnimatingShuffle, isAnimatingSwap })}
      onClick={() => tileOnClickHandler(tile)}
    >
      <Typography
        sx={{ transition: '0.3s' }}
        className={clsx({ isAnimatingShuffle })}
        color={isSelected || isSolved ? 'white' : 'black'}
        fontWeight={'bold'}
      >
        {tile.text.toUpperCase()}
      </Typography>
      <Typography
        sx={{ transition: '0.3s' }}
        className={clsx({ isAnimatingShuffle })}
        color={isSelected || isSolved ? 'white' : 'black'}
        variant="subtitle2"
      >
        row: {tile.rowIndex}
      </Typography>
      <Typography
        sx={{ transition: '0.3s' }}
        className={clsx({ isAnimatingShuffle })}
        color={isSelected || isSolved ? 'white' : 'black'}
        variant="subtitle2"
      >
        column: {tile.columnIndex}
      </Typography>
    </Box>
  );
}

export default observer(Tile);
