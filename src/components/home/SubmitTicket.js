
import React from 'react';
import styled from 'styled-components';

import SubmitTicketForm from './SubmitTicketForm';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: min-content;
    grid-row-gap: ${ props => props.theme.largePad };
    min-width: 500px;
    max-width: 1000px;
    padding: ${ props => props.theme.largePad };

    border-radius: ${ props => props.theme.largeRound };
    box-shadow: ${ props => props.theme.largeShadow };
`;

const Header  = styled.h3`
    margin: auto;
    font-size: ${ props => props.theme.headerSizeFont };
    font-weight: ${ props => props.theme.lightMeduimFont };
`;

const SubmitTicket = (props) => {
    return (
        <Wrapper>
            <Header>New Ticket</Header>
            <SubmitTicketForm />
        </Wrapper>
    );
}

export default SubmitTicket;