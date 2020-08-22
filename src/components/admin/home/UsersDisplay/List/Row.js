
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    padding: 5px 0 5px 5px;
    display: grid;
    grid-template-columns: 1fr .5fr .5fr .5fr .25fr .25fr .25fr .25fr;
    grid-template-rows: 1fr;
    border-radius: 5px;

    &:hover {
        background: ${ props => props.theme.highlightColorTwo };
        cursor: pointer;
    }
`;

const Cell = styled.p`
    font-size: 10pt;
`;

const InfoTableRow = (props) => {
    const handleClick = () => {
        if (props.onClick) {
            props.onClick();
        }
    }

    return (
        <Wrapper
         onClick={ handleClick }>
            <Cell>{ props.name }</Cell>
            <Cell>{ props.organization }</Cell>
            <Cell>{ props.tags }</Cell>
            <Cell>{ props.department }</Cell>
            <Cell>{ props.openTicketCount }</Cell>
            <Cell>{ props.assetCount }</Cell>
            <Cell>{ props.itemCount }</Cell>
            <Cell>{ props.onLoanCount }</Cell>
        </Wrapper> 
    );
}

export default InfoTableRow;