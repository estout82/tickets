
import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import NewTicket from './new/NewTicket';
import ViewTickets from './view';
import Knowledge from './knowledge';
import Appointment from './appointment';

const Wrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
`;

const Portal = () => {
    return (
        <Wrapper>
            <Header />
            <Switch>
                <Route path="/portal/new" component={NewTicket} />
                <Route path="/portal/view" component={ViewTickets} />
                <Route path="/portal/knowledge" component={Knowledge} />
                <Route path="/portal/appointment" component={Appointment} />
            </Switch>
        </Wrapper>
    );
}

export default Portal;