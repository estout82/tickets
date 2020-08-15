
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;
    height: 60px;
    background: ${ props => props.selected ? props.theme.highlightColorTwo : 'inherit' };
    color: ${ props => props.theme.textColorOne };
    font-size: 10pt;
    font-weight: 300;

    :hover {
        background: ${ props => {
            if (props.selected) return props.theme.highlightColorTwoDark;
            else return props.theme.backgroundColorOne;
        }};
        cursor: pointer;
    }
`;

const TicketListRow = (props) => {

    return (
        <Wrapper selected={props.selected}>
            <p>{props.num}</p>
            <span>{props.title}</span>
            <span>{props.client}</span>
            <span>{props.organization}</span>
        </Wrapper>
    );
}

export default TicketListRow;