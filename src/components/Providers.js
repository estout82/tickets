
import React from 'react';
import { ThemeProvider } from 'styled-components';
import * as theme from '../config/theme';
import { AuthUserProvider } from './context/AuthUserContext';
import GlobalStore from '../config/stores/global/GlobalStore';

function Providers({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <AuthUserProvider>
        <GlobalStore>
          { children }
        </GlobalStore>
      </AuthUserProvider>
    </ThemeProvider>
  );
}

export default Providers;
