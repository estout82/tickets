
import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import TicketListRow from './TicketListRow';
import { AuthUserContext } from '../../context/AuthUserContext';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 60px 1fr 50px;
    margin: 10px;
    width: calc(50% - 20px);
    height: 100%;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
`;

const ToolBarWrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px 10px 0 0;
`;

const TicketListWrapper = styled.div`
    overflow: scroll;
`;

const PagenationWrapper = styled.div`
    border-radius: 0 0 10px 10px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;

`;

const SearchInput = styled.input`
    margin-left: 10px;
    background: none;
    border: 1px solid ${ props => props.theme.textColorTwo };
    border-radius: 30px;
    outline: none;
    font-size: 12pt;
    padding: 10px;

    ::placeholder {
        color: ${ props => props.theme.textColorTwo };
    }
`;

const PageControlButton = styled.button`
    padding: 10px;
    min-width: 40px;
    margin: 0 20px;
    background: none;
    border: 1px solid ${ props => props.theme.highlightColorOne };
    border-radius: 5px;
    color: ${ props => props.theme.highlightColorOne };
    outline: none;

    :hover {
        background: ${ props => props.theme.highlightColorOne };
        color: white;
        transition: .15s background;
        cursor: pointer;
    }
`;

const PageIcon = styled.span`
    padding: 10px 0;
    min-width: 30px;
    border: ${ props => props.selected ? '1px solid ' + props.theme.textColorTwo : 'none' };
    border-radius: 10px;
    text-align: center;
    margin-right: 5px;
    font-size: 10pt;
    font-weight: 200;
`;

const TicketList = (props) => {
    const [tickets, setTickets] = useState([]);
    const authUser = useContext(AuthUserContext);

    useEffect(() => {
        // TODO: fix this

        const endpoint = 'api/ticket';

        let headers = new Headers();
        headers.append('X-Auth', authUser.accessToken);

        const options = {
            method: 'GET'
        };
    }, []);

    const selectTicket = (event) => {
        event.target.selected = true;
    }

    return (
        <Wrapper>
            <ToolBarWrapper>
                <SearchInput placeholder="Search..."></SearchInput>
            </ToolBarWrapper>
            <TicketListWrapper>
                {
                    tickets.map(elem => {
                        return (
                            <TicketListRow 
                                key={elem.id}
                                num={elem.id}
                                title={elem.title}
                                organization={elem.organizationName}
                                client={elem.clientFirstName + ' ' + 
                                    elem.clientLastName }
                                onClick={selectTicket}
                            />
                        )
                    })
                }
            </TicketListWrapper>
            <PagenationWrapper>
                <PageControlButton>&lt;</PageControlButton>
                <PageIcon>1</PageIcon>
                <PageIcon selected>2</PageIcon>
                <PageIcon>. . .</PageIcon>
                <PageControlButton>&gt;</PageControlButton>
            </PagenationWrapper>
        </Wrapper>
    );
}

export default TicketList;