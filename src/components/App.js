
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

  // callback passed to loading component to deetermine loading status
  const getStatus = useCallback(() => {
    let r = {};

    if (globalStore.status === 'done') {
      r = { status: 'done' };
    } else if (globalStore.status === 'error') {
      r = { status: 'error', msg: globalStore.status.msg };
    } else {
      r = { status: 'loading' };
    }

    return r;
  }, [globalStore.status]);

  const renderWhenLoaded = useLoading(getStatus);

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
