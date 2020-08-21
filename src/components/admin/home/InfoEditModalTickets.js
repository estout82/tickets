
import React, { useState } from 'react';
import Accordian from '../../common/Accordian';
import useTicketBatch from '../../../config/stores/tickets/hooks/useTicketBatch';

const InfoEditModalTickets = ({ ticketIds }) => {
    const tickets = useTicketBatch(ticketIds);

    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpand = () => {
        setIsExpanded(true);
    } 

    const handleCollapse = () => {
        setIsExpanded(false);
    }

    console.dir(tickets);

    return (
        <Accordian
         title="Tickets"
         isExpanded={ isExpanded }
         onExpand={ handleExpand }
         onCollapse={ handleCollapse }>
            {
                tickets ? 
                Object.keys(tickets).map(key => {
                    const ticket = tickets[key];

                    if (ticket.status === 'done') {
                        return <p key={ key }>{ ticket.title }</p>
                    } else {
                        return <p key={ key }>loading</p>
                    }
                }) :
                'None'
            }
        </Accordian>
    );
}

export default InfoEditModalTickets;