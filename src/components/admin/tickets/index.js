
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import TicketList from './TicketList';
import TicketDetails from './TicketDetails';
import useTicket from '../../../config/stores/tickets/useTicket';

const Wrapper = styled.div`
    height: 100%;
    flex-grow: 1;
    background: ${ props => props.theme.backgroundColorTwo };
`;

const Header = styled.header`
    min-height: 80px;
    padding-top: 10px;
    text-align: center;

    h1 {
        margin: 0;
        font-weight: 300;
        font-size: 18pt;
    }
`;

const Nav = styled.nav`
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;

    a {
        padding: 10px 10px;
        color: inherit;
        text-decoration: none;
        font-weight: 200;
    }

    a:hover {
        color: ${ props => props.theme.highlightColorOne };
    }
`;

const Content = styled.div`
    height: calc(100% - 80px - 30px);
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
`;

const Tickets = (props) => {
    return (
        <Wrapper>
            <Header>
                <h1>Tickets</h1>
                <Nav>
                    <Link to="">All</Link>
                    <Link to="">Open</Link>
                    <Link to="">Category</Link>
                    <Link to="">Tech</Link>
                    <Link to="">More</Link>
                </Nav>
            </Header>
            <Content>
                <TicketList />
                <TicketDetails />
            </Content>
        </Wrapper>
    );
}

export default Tickets;