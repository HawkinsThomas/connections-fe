import Box from '@mui/material/Box';
import { observer } from 'mobx-react-lite';
import Square from './Tile/Tile';

function GameRow({ rowIndex }) {
  return (
    <Box sx={{ display: 'flex' }}>
      <Square rowIndex={rowIndex} columnIndex={0} />
      <Square rowIndex={rowIndex} columnIndex={1} />
      <Square rowIndex={rowIndex} columnIndex={2} />
      <Square rowIndex={rowIndex} columnIndex={3} />
    </Box>
  );
}

export default observer(GameRow);
