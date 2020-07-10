
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
    min-width: 200px;
    height: 100%;
    background: ${ props => props.theme.backgroundColorOne };
    font-family: 'Poppins', sans-serif;
    color: ${ props => props.theme.textColorOne };

    span {
        font-weight: 200;
    }
`;

const Header = styled.header`
    padding-top: 10px;
    padding-left: 30px;
    font-size: 18pt;
`;

const Nav = styled.nav`
    padding-top: 20px;
    padding-left: 30px;
    height: 250px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;

    a {
        color: inherit;
        text-decoration: none;
        font-weight: 300;
    }

    a:hover {
        color: ${ props => props.theme.highlightColorOne };
    }
`;

const Sidebar = (props) => {
    return (
        <Wrapper>
            <Header>Bayside <span>IT <br />Helpdesk</span></Header>
            <Nav>
                <Link to="/admin">Home</Link>
                <Link to="/admin/wiki">Wiki</Link>
                <Link to="/admin/tickets">Tickets</Link>
                <Link to="/admin/inventory">Inventory</Link>
                <Link to="/admin/config">Config</Link>
            </Nav>
        </Wrapper>
    );
}

export default Sidebar;