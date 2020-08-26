
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    margin-bottom: 10px;
    display: grid;
    grid-template-columns: 1fr .5fr .5fr .5fr .25fr .25fr .25fr .25fr;
    grid-template-rows: 1fr;
`;

const Cell = styled.p`
    font-size: 10pt;
    border-bottom: 1px solid ${ props => props.theme.textColorTwo }
`;

const InfoTableHeader = (props) => {
    return (
        <Wrapper>
            <Cell>Name</Cell>
            <Cell>Organization</Cell>
            <Cell>Tags</Cell>
            <Cell>Department</Cell>
            <Cell>Tickets</Cell>
            <Cell>Assets</Cell>
            <Cell>Items</Cell>
            <Cell>On-Loan Count</Cell>
        </Wrapper>
    );
}

export default InfoTableHeader;