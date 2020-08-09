
import React from 'react';
import styled from 'styled-components';
import ItemPickerSearchControls from './ItemPickerSearchControls';
import ItemPickerControls from './ItemPickerControls';
import ItemPickerTable from './ItemPickerTable';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
`;

const Header = styled.div`
    h3 {
        font-weight: 300;
    }
`;

const ItemPicker = (props) => {
    return (
        <Wrapper>
            <Header>
                <h3>Browse</h3>
            </Header>
            <ItemPickerSearchControls />
            <ItemPickerTable />
            <ItemPickerControls />
        </Wrapper>
    );
}

export default ItemPicker;