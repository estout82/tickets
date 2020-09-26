
import React from 'react';
import styled from 'styled-components';

const Entry = styled.div`
    display: block;
    color: ${ props => props.completed ? props.theme.textColorTwo : 'inherit' };

    span {
        display: inline-block;
        width: 10px;
        height: 10px;
        margin: 0 20px;
        border-width: 1px;
        border-style: solid;
        border-color: ${ props => props.completed ? props.theme.highlightColorOne : 
            props.theme.textColorOne };
        background: ${ props => props.completed ? props.theme.highlightColorOne : 'none' }; 
        border-radius: 10px;
    }
`;

const ControlWrapper = styled.div`
    width: max-content;
    margin-top: ${ props => props.theme.largeMargin };
`;

const Header = styled.h3`
    font-weight: ${ props => props.theme.meduimFont };
`;

const TicketToDo = ({ data }) => {
    

    return (
        <>
            <Header>Todo</Header>
            {

            }
            <ControlWrapper>
                    <Entry>
                    </Entry>
            </ControlWrapper>
        </>
    );
};

export default TicketToDo;