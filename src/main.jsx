import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AppContainer from './AppContainer.jsx';
import './index.css';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Provider } from 'hooks/useMst.js';
import { rootStore } from 'mst/rootStore.js';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={darkTheme}>
      <Provider value={rootStore.create()}>
        <AppContainer />
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
