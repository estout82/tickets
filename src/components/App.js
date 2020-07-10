
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Admin from './admin';
import Portal from './portal';
import * as theme from '../config/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/portal" component={Portal}/>
          <Route path="/admin" component={Admin} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
