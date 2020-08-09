
import React from 'react';
import styled from 'styled-components';
import CartControls from './CartControls';
import CartHeader from './CartHeader';
import CartTable from './CartTable';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 80px 1fr 50px;
    grid-template-columns: 1fr;
`;

const Cart = (props) => {
    return (
        <Wrapper>
            <CartHeader />
            <CartTable />
            <CartControls />   
        </Wrapper>
    );
}

export default Cart;