
// TODO: don't provide context to all routes

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Page from '../common/Page';
import Sidebar from './Sidebar';
import Tickets from './tickets';
import Wiki from './wiki';
import Inventory from './inventory';
import Config from './config';
import Home from './home';
import UserStore from '../../config/stores/user/UserStore';
import TicketStore from '../../config/stores/tickets/TicketStore';
import ItemStore from '../../config/stores/item/ItemStore';

const Admin = (props) => {
    return (
        <UserStore>
            <TicketStore>
                <ItemStore>
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
                </ItemStore>
            </TicketStore>
        </UserStore>
    );
}

export default Admin;