
import React from 'react';
import styled from 'styled-components';
import CartTableRow from './CartTableRow';

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    overflow: scroll;
`;

const CartTable = (props) => {
    return (
        <Wrapper>
            <CartTableRow />
            <CartTableRow />
            <CartTableRow />
        </Wrapper>
    );
}

export default CartTable;