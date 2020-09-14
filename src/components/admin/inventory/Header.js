
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
    min-height: 80px;
    padding-top: 10px;
    text-align: center;
    padding: ${ props => props.theme.largePad }; 

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

const Header = (props)  => {
    return (
        <Wrapper>
            <h1>Inventory</h1>
            <Nav>
                <Link to='/admin/inventory/items'>Items</Link>
                <Link to='/admin/inventory/assets'>Assets</Link>
                <Link to='/admin/inventory/locations'>Locations</Link>
                <Link to='/admin/inventory/orders'>Orders</Link>
                <Link to='/admin/inventory/issue'>Issue</Link>
            </Nav>
        </Wrapper>
    );
}

export default Header;