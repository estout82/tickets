
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-flow: ${ props => props.direction } nowrap;
    width: 100%;
    height: 100%;
`;


const Page = ({ direction, children }) => {
    return (
        <Wrapper direction={ direction }>
            { children }
        </Wrapper>
    );
}

export default Page;