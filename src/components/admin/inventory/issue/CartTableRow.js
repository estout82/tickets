
import React from 'react';
import styled from 'styled-components';
import Checkbox from '../../../common/Checkbox';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr .75fr .75fr .75fr 40px;

    font-size: 10pt;

    p {
        overflow: scroll;
    }
`;

const Cell = styled.div`
    display: flex;
    flex-flow: row;
    justify-content: ${ props => props.centered ? 'center' : 'flex-start' };
    align-items: center;
`;

const CartTableRow = (props) => {
    const handleMouseEnter = () => {

    }

    const handleMouseLeave = () => {

    }

    const handleDeleteButtonClick = () => {

    }

    return (
        <Wrapper>
            <Cell>Name</Cell>
            <Cell>Quantity</Cell>
            <Cell><Checkbox value={ true } /></Cell>
            <Cell>Price</Cell>
            <Cell>x</Cell>
        </Wrapper>
    );
}

export default CartTableRow;