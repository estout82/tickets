
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    height: min-content;
    padding: 5px 0 5px 5px;
    margin-top: 3px;
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

const InfoTableRow = ({ data, onClick }) => {
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    }

    return (
        <Wrapper
         onClick={ handleClick }>
            <Cell>{ data.name }</Cell>
            <Cell>{ data.organizationName }</Cell>
            <Cell>{ data.tags }</Cell>
            <Cell>{ data.department }</Cell>
            <Cell>{ data.ticketCount }</Cell>
            <Cell>{ data.assetCount }</Cell>
            <Cell>{ data.itemCount }</Cell>
            <Cell>{ data.onLoanCount }</Cell>
        </Wrapper> 
    );
}

export default InfoTableRow;