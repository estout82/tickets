
import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import Accordian from '../../../../../common/Accordian';
import useTicketBatch from '../../../../../../config/stores/tickets/useTicketBatch';
import useLoading from '../../../../../common/hooks/useLoading';

const Row = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    font-size: 10pt;

    p {

    }
`;

const TicketNumLabel = styled.span`
    background: ${ props => props.theme.highlightColorOne };
    font-size: 10pt;
    padding: 3px 7px;
    color: ${ props => props.theme.textColorThree };
    font-size: 8pt;
    border-radius: 10px;
`;

const GotoLinkWrapper = styled.div`
    border: 1px solid ${ props => props.theme.highlightColorOne };
    color: ${ props => props.theme.highlightColorOne };
    padding: 3px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .15s color, .15s background;
    font-size: 8pt;

    &:hover {
        cursor: pointer;
        color: white;
        background: ${ props => props.theme.highlightColorOne };
    }
`;

const Error = styled.p`
    color: ${ props => props.theme.errorColorOne };
`;

const Tickets = ({ data }) => {
    const ticketBatch = useTicketBatch(data.ticketIds);

    const [isExpanded, setIsExpanded] = useState(false);

    const renderWhenLoaded = useLoading(useCallback(() => {
        if (ticketBatch && ticketBatch.status === 'loading') return true;
        return false;
    }, [ticketBatch]));

    const handleExpand = () => {
        setIsExpanded(true);
    } 

    const handleCollapse = () => {
        setIsExpanded(false);
    }

    console.dir(ticketBatch);

    // render callback to pass into loading hook
    const render = () => {
        if (ticketBatch.status === 'error') {
            return (
                <Row>
                    <Error>Error loading tickets</Error>
                </Row>
            );
        }

        return (
            ticketBatch.tickets ? 
            ticketBatch.tickets.map(ticket => {
                return (
                    <Row key={ ticket._id }>
                        <TicketNumLabel>{ ticket.number }</TicketNumLabel>
                        <p>{ ticket.title }</p>
                        <GotoLinkWrapper>View</GotoLinkWrapper>
                    </Row>
                );
            }) :
            <Row>No tickets</Row>
        );
    }

    return (
        <Accordian
         title="Tickets"
         isExpanded={ isExpanded }
         onExpand={ handleExpand }
         onCollapse={ handleCollapse }>
            { renderWhenLoaded(render) }
        </Accordian>
    );
}

export default Tickets;