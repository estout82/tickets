
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

const DeleteButton = styled.button`
    background: none;
    color: ${ props => props.theme.textColorTwo };

    &:hover {
        font-weight: 700;
        color: ${ props => props.theme.highlightColorOne };
        cursor: pointer;
    }
`;

const CartTableRow = (props) => {
    const handleMouseEnter = () => {
        if (props.onMouseEnter) {
            props.onMouseEnter();
        }
    }

    const handleMouseLeave = () => {
        if (props.onMouseLeave) {
            props.onMouseLeave();
        }
    }

    const handleDeleteButtonClick = () => {
        if (props.onDelete) {
            props.onDelete();
        }
    }

    const handleIsLoanerButtonClick = (newValue) => {
        if (props.onIsLoanerChange) {
            props.onIsLoanerChange(newValue)
        }
    }

    return (
        <Wrapper
         onMouseEnter={ handleMouseEnter }
         onMouseLeave={ handleMouseLeave }>
            <Cell>{ props.name }</Cell>
            <Cell>{ props.quantity }</Cell>
            <Cell>
                <Checkbox 
                 value={ props.isLoaner } 
                 onChange={ handleIsLoanerButtonClick }
                />
            </Cell>
            <Cell>{ props.price }</Cell>
            { 
                props.hovering ?
                <Cell>
                    <DeleteButton
                     onClick={ handleDeleteButtonClick }>
                        x
                    </DeleteButton>
                </Cell> :
                null
            }
        </Wrapper>
    );
}

export default CartTableRow;