
import React from 'react';
import styled from 'styled-components';
import List from './List/List';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 5px;
    box-shadow: ${ props => props.theme.largeShadow };
`;

const Orders = (props) => {
    return (
        <Wrapper>
            <List />
        </Wrapper>
    );
}

export default Orders;