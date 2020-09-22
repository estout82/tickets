
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 10px;
    font-size: 10pt;
    background: ${ props => props.appearance ? 
        props.theme.background[props.appearance] : 
        props.theme.highlightColorOne };
    text-align: left;
    vertical-align: center;
    border-radius: 10px;
`;

function Message({ msg, appearance }) {
    return (
        <Wrapper appearance={ appearance }>
            { msg }
        </Wrapper>
    );
}

export default Message;