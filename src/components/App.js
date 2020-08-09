
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Admin from './admin';
import Portal from './portal';
import Login from './login';
import * as theme from '../config/theme';
import { AuthUserProvider } from './context/AuthUserContext';
import AuthCheck from './AuthCheck';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthUserProvider>
        <Router>
          <Switch>
            <Route path="/portal" component={ Portal }/>
            <Route path="/admin" component={ Admin } />
            <Route path="/login" component={ Login } />
          </Switch>
        </Router>
      </AuthUserProvider>
    </ThemeProvider>
  );
}

export default App;
