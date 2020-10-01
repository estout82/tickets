
import React from 'react';
import { ThemeProvider } from 'styled-components';
import * as theme from '../config/theme';
import { AuthUserProvider } from './context/AuthUserContext';
import { Provider as GlobalStoreProvider } from '../config/stores/global/GlobalStoreContext';

function Providers({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <AuthUserProvider>
        <GlobalStoreProvider>
          { children }
        </GlobalStoreProvider>
      </AuthUserProvider>
    </ThemeProvider>
  );
}

export default Providers;
