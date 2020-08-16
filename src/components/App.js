
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Admin from './admin';
import Portal from './portal';
import Login from './login';
import Loading from './common/Loading';
import useGlobalStore from '../config/stores/global/useGlobalStore';

function App() {
  const globalStore = useGlobalStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (globalStore.status !== 'done') return;
    
    // if were here, then evrything has loaded
    setIsLoading(false);
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
