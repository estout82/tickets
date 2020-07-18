
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Page from '../common/Page';
import Sidebar from './Sidebar';
import Tickets from './tickets';
import Wiki from './wiki';
import Inventory from './inventory';
import Config from './config';
import Home from './home';

const Admin = (props) => {
    return (
        <Page direction="row">
            <Sidebar />
            <Switch>
                <Route exact path="/admin/" component={Home} />
                <Route exact path="/admin/wiki" component={Wiki} />
                <Route exact path="/admin/tickets" component={Tickets} />
                <Route path="/admin/inventory" component={Inventory} />
                <Route exact path="/admin/config" component={Config} />
            </Switch>
        </Page>
    );
}

export default Admin;