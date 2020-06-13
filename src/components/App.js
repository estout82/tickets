
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import { ThemeProvider } from 'styled-components';

import Tickets from './tickets';
import Home from './home';
import * as theme from '../config/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Route path="/" exact component={Home}/>
        <Route path="/tickets" exact component={Tickets} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
