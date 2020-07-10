
/**
 * summary: component to display a row w/ item's info in list
 * 
 * props:
 *      - 
 */

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    min-height: 50px;
    display: grid;
    grid-template-columns: ${ props => props.colSizes.join(' ') };
    grid-template-rows: 1fr;

    &:hover {
        background: ${ props => props.theme.highlightColorOne };
        color: white;
        transition: .15s background;
        cursor: pointer;
    }

    p {
        margin: 0;
        padding: ${ props => props.theme.largePad };
    }
`;

const ItemListRow = (props) => {
    console.log('ran');

    return (
        <Wrapper colSizes={ props.format.cols.map(col => col.size) }>
            {
                props.format.cols.map(col => {
                    const data = props.data[col.dataField];

                    if (data == null) {
                        return <p>Unknown</p>
                    }

                    return (
                        <p>{ data }</p>
                    );
                })
            }
        </Wrapper>
    );
}

export default ItemListRow;