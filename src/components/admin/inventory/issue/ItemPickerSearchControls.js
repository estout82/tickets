
import React, { useState } from 'react';
import styled from 'styled-components';
import Select from '../../../common/Select';
import Input from '../../../common/Input';
import Button from '../../../common/Button';

const Wrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
`;


const Row = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    padding: 5px 0;
    font-size: 10pt;

    span {
        margin-right: 5px;
    }
`;

const ItemPickerControls = (props) => {
    const [ source, setSource ] = useState('Items');
    
    return (
        <Wrapper>
            <Row>
                <Select
                value="Items"
                options={ [ 'Items', 'Assets' ] }
                />
            </Row>
            <Row>
                <span>UPC: </span>
                <Input />
                <span>Custom ID: </span>
                <Input />
                <Button>
                    Search
                </Button>
            </Row>
        </Wrapper>
    );
}

export default ItemPickerControls;