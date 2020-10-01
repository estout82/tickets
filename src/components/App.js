
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Admin from './admin';
import Portal from './portal';
import Login from './login';
import useLoading from './common/hooks/useLoading';
import useGlobalStoreContext from '../config/stores/global/useeGlobalStoreContext';

function App() {
  // used to determine loading status
  const globalStore = useGlobalStoreContext();
  const render = useLoading();

  console.log(globalStore);

  const renderDoneState = () => {
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

  return render(renderDoneState, { status: globalStore.status.text });
}

export default App;
