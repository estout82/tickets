
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: baseline;
    min-height: 100px;
    padding: 0 ${ props => props.theme.largePad };
    color: ${ props => props.theme.textColorOne };
`;

const Title = styled.h1`
    font-size: ${ props => props.theme.headerFontSize };
    font-weight: ${ props => props.theme.meduimFont };

    span {
        font-weight: 100;
    }
`;

const NavWrapper = styled.ul`
    margin-left: 50px;
    list-style-type: none;
`;

const NavItem = styled.li`
    display: inline-block;
    position: relative;
    margin-right: 20px;

    &::after {
        position: absolute;
        display: ${ props => props.selected ? 'block' : 'none' };
        content: '';
        width: 80%;
        margin: 0 10%;
        min-height: 1px;
        background: ${ props => props.theme.highlightColorOne };
    }

    a {
        text-decoration: none;
        color: ${ props => props.theme.textColorOne };

        &:hover {
            color: ${ props => props.theme.highlightColorOne };
        }
    }
`;

const Header = (props) => {
    return (
        <Wrapper>
            <Title>Bayside <span>IT Helpdesk</span></Title>
            <NavWrapper>
                <NavItem selected>
                    <Link to="/portal/new">New Ticket</Link>
                </NavItem>
                <NavItem>
                    <Link to="/portal/view">View My Tickets</Link>
                </NavItem>
                <NavItem>
                    <Link to="/portal/knowledge">Knowledge Base</Link>
                </NavItem>
                <NavItem>
                    <Link to="/portal/appointment">Schedule Appointment</Link>
                </NavItem>
            </NavWrapper>
        </Wrapper>
    );
}

export default Header;