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
  transition: '0.3s ease',
  '&:hover': {
    cursor: 'pointer',
  },
  animation: 'none',
  '&.isAnimatingShake': {
    animation: 'shake 0.15s ease-in-out 3',
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
};

function Tile({ rowIndex, columnIndex }) {
  const {
    selectedGame: { tileOnClickHandler, getTileByIndex },
  } = useMst();

  const tile = getTileByIndex(rowIndex, columnIndex);
  const { isSelected, isAnimatingShake, setIsAnimatingShake } = tile;

  useAnimateOnce({ isAnimating: isAnimatingShake, setIsAnimating: setIsAnimatingShake, timeout: 450 });
  return (
    <Box sx={styles} className={clsx({ isSelected, isAnimatingShake })} onClick={() => tileOnClickHandler(tile)}>
      <Typography sx={{ transition: '0.3s' }} color={isSelected ? 'white' : 'black'} fontWeight={'bold'}>
        {tile.text.toUpperCase()}
      </Typography>
    </Box>
  );
}

export default observer(Tile);
