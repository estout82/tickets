
import React from 'react';
import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    min-width: 50px;
    min-height: 50px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
`;

const IconAnimation = keyframes`
    0% {
        width: 1px;
        height: 1px;
    }

    100% {
        width: 30px;
        height: 30px;
    }
`;

const Icon = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 100%;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, .2);
    background: ${ props => props.theme.highlightColorOne };
    animation-name: ${ IconAnimation };
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
`;

const Loading = () => {
    return (
        <Wrapper>
            <Icon animation={ IconAnimation }/>
        </Wrapper>
    );
};

export default Loading;