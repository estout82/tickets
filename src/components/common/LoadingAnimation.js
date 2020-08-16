
import React from 'react';
import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
`;

const IconAnimation = keyframes`
    0% {
        transform: scale(0%);
    }

    100% {
        transform: scale(100%);
    }
`;

const Icon = styled.div`
    width: 30px;
    height: 30px;
    animation: ${ props => props.animation };
`;

const LoadingAnimation = (props) => {
    return (
        <Wrapper>
            <Icon animation={ IconAnimation }/>
        </Wrapper>
    );
}

export default LoadingAnimation;