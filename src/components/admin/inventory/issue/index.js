
import React from 'react';
import styled from 'styled-components';
import Cart from './Cart';
import ItemPicker from './ItemPicker';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    padding: 10px;
    box-shadow: ${ props => props.theme.largeShadow };
    border-radius: 5px;
`;

const Issue = (props) => {
    return (
        <Wrapper>
            <ItemPicker />
            <Cart />
        </Wrapper>
    );
}

export default Issue;