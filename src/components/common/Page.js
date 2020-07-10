
import React from 'react';
import styled from 'styled-components';

const PageComponent = styled.div`
    display: flex;
    flex-flow: ${ props => props.direction } nowrap;
    height: 100%;
`;

const Page = (props) => {
    return (
        <PageComponent direction={props.direction}>
            {props.children}
        </PageComponent>
    );
}

export default Page;