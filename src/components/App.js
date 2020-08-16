
import React, { useCallback } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Admin from './admin';
import Portal from './portal';
import Login from './login';
import Loading from './common/Loading';
import useGlobalStore from '../config/stores/global/useGlobalStore';

function App() {
  // used to determine loading status
  const globalStore = useGlobalStore();

  // callback passed to loading component
  const isLoading = useCallback(() => {
    if (globalStore.status !== 'done') return true;
    return false;
  }, [globalStore.status]);

  return (
    <Loading isLoading={ isLoading }>
      <Router>
        <Switch>
          <Route path="/portal" component={ Portal }/>
          <Route path="/admin" component={ Admin } />
          <Route path="/login" component={ Login } />
        </Switch>
      </Router>
    </Loading>
  );
}

export default App;
