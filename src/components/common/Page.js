
import React from 'react';
import styled from 'styled-components';

const PageComponent = styled.div`
    display: flex;
    flex-flow: column nowrap;
    height: 100%;
`;

const Page = (props) => {
    return (
        <PageComponent>
            {props.children}
        </PageComponent>
    );
}

export default Page;