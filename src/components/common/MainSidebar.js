
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

const MainSidebar = (props) => {
    return (
        <Wrapper>
            <Header>Bayside <span>IT <br />Helpdesk</span></Header>
            <Nav>
                <Link to="">Home</Link>
                <Link to="">Wiki</Link>
                <Link to="">Tickets</Link>
                <Link to="">Inventory</Link>
                <Link to="">Admin</Link>
            </Nav>
        </Wrapper>
    );
}

export default MainSidebar;