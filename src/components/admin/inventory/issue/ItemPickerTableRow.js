
import React from 'react';
import styled from 'styled-components';
import Select from '../../../common/Select';
import Button from '../../../common/Button';

const Wrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr .75fr .5fr .5fr .5fr;
    grid-template-rows: 1fr;
    padding: 5px;
    font-size: 10pt;
`;

const Cell = styled.div`

`;

const ItemPickerTableRow = (props) => {
    return (
        <Wrapper>
            <Cell>{ props.name }</Cell>
            <Cell>{ props.category }</Cell>
            <Cell>
                <Select dd
                 options={ [ 1, 2, 3, 4, 5, 6 ] }    
                />
            </Cell>
            <Cell>
                <Select dd
                 options={ [ 1, 2 ] }    
                />
            </Cell>
            <Cell>
                <Button minimal>
                    Add to Cart
                </Button>
            </Cell>        
        </Wrapper>
    );
}

export default ItemPickerTableRow;