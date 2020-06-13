
import React from 'react';
import styled from 'styled-components';

import Page from '../common/Page';
import Header from './Header';
import SubmitTicket from './SubmitTicket';

const Content = styled.div`
    flex-grow: 1;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    height: 1fr;
`;

const Home = (props) => {
    return (
        <Page>
            <Header />
            <Content>
                <SubmitTicket />
            </Content>
        </Page>
    );
}

export default Home;