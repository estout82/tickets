
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Page from '../common/Page';
import Header from './Header';
import NewTicket from './new';
import ViewTickets from './view';
import Knowledge from './knowledge';
import Appointment from './appointment';

const Portal = (props) => {
    return (
        <Page direction="column">
            <Header />
            <Switch>
                <Route path="/portal/new" component={NewTicket} />
                <Route path="/portal/view" component={ViewTickets} />
                <Route path="/portal/knowledge" component={Knowledge} />
                <Route path="/portal/appointment" component={Appointment} />
            </Switch>
        </Page>
    );
}

export default Portal;