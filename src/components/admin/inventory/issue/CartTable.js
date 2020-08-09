
import React, { useState } from 'react';
import styled from 'styled-components';
import CartTableRow from './CartTableRow';

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    overflow: scroll;
`;

const MessageWrapper = styled.p`
    font-size: 10pt;
`;

const NOT_HOVERING = -1;

const CartTable = (props) => {
    const [ cartRows, setCartRows ] = useState([
        { 
            name: "USBC to HDMI Adapter",
            quantity: 1,
            isLoaner: true,
            price: '$50.00'
        }
    ]);

    const [ hoveringRow, setHoveringRow ] = useState(NOT_HOVERING);

    const handleRowDelete = (index) => {
        let newRows = [
            ...cartRows.splice(0, index),
            ...cartRows.splice(index + 1)
        ];

        // set rows to null if there are none left
        if (newRows.length <= 0) {
            setCartRows();
            return;
        }

        setCartRows(newRows);
    }

    const handleRowIsLoanerChange = (index, newValue) => {
        let newRows = [...cartRows];
        newRows[index].isLoaner = newValue;
        setCartRows(newRows);
    }

    const handleRowMouseEnter = (index) => {
        setHoveringRow(index);
    }

    const handleRowMouseLeave = (index) => {
        setHoveringRow(NOT_HOVERING);
    }

    return (
        <Wrapper>
            {
                cartRows ?
                cartRows.map( ( row, index ) => {
                    return (
                        <CartTableRow 
                         key={ row.name }
                         name={ row.name }
                         quantity={ row.quantity }
                         isLoaner={ row.isLoaner }
                         price={ row.price }
                         hovering={ hoveringRow === index }
                         onDelete={ () => handleRowDelete(index) }
                         onIsLoanerChange={ ( newValue ) => handleRowIsLoanerChange(index, newValue) }
                         onMouseEnter={ () => handleRowMouseEnter(index) }
                         onMouseLeave={ () => handleRowMouseLeave(index) }
                        />
                    )
                } ) :
                <MessageWrapper>Cart is empty</MessageWrapper>
            }
        </Wrapper>
    );
}

export default CartTable;