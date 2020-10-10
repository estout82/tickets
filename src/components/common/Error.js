
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    min-width: 50px;
    min-height: 50px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    color: ${ props => props.theme.errorColorOne };
`;

const Error = () => {
    return (
        <Wrapper>
            Error
        </Wrapper>
    );
};

export default Error;