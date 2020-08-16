
import React, { useCallback } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Admin from './admin';
import Portal from './portal';
import Login from './login';
import useLoading from './common/hooks/useLoading';
import useGlobalStore from '../config/stores/global/useGlobalStore';

function App() {
  // used to determine loading status
  const globalStore = useGlobalStore();

  // callback passed to loading component
  const renderWhenLoaded = useLoading(useCallback(() => {
      if (globalStore.status !== 'done') return true;
      return false;
    }, [globalStore.status])
  );

  const render = () => {
    return (
      <Router>
        <Switch>
          <Route path="/portal" component={ Portal }/>
          <Route path="/admin" component={ Admin } />
          <Route path="/login" component={ Login } />
        </Switch>
      </Router>
    );
  }

  return renderWhenLoaded(render);
}

export default App;
