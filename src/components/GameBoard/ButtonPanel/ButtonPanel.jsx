import Box from '@mui/material/Box';
import { observer } from 'mobx-react-lite';
import { Button } from '@mui/material';
import { useMst } from 'hooks/useMst';

function ButtonPanel() {
  const {
    selectedGame: { isSubmitEnabled, submitGroupHandler },
  } = useMst();
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <Button disabled={!isSubmitEnabled} variant="outlined" onClick={() => submitGroupHandler()}>
        Submit
      </Button>
    </Box>
  );
}

export default observer(ButtonPanel);
