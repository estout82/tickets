
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import Header from './Header';
import Items from './items';
import Assets from './assets';
import Locations from './locations';
import Orders from './Orders/Orders';
import Issue from './issue';

const Content = styled.div`
    width: 100%;
    height: calc(100% - 40px);
    margin: 20px;
    display: flex;
    flex-direction: column;
`;

const Inventory = (props) => {
    return (
        <Content>
            <Header />
            <Switch>
                <Route exact path="/admin/inventory/items" component={Items} />
                <Route exact path="/admin/inventory/assets" component={Assets} />
                <Route exact path="/admin/inventory/locations" component={Locations} />
                <Route exact path="/admin/inventory/orders" component={Orders} />
                <Route exact path="/admin/inventory/issue" component={Issue} />
            </Switch>
        </Content>
    );
}

export default Inventory;