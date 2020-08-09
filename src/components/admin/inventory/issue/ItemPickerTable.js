
import React from 'react';
import styled from 'styled-components';
import ItemPickerTableRow from './ItemPickerTableRow';

const Wrapper = styled.div`
    width: 100%; 
    display: flex;
    flex-flow: column nowrap;
`;

const HeaderWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr .75fr .5fr .5fr .5fr;
    grid-template-rows: 1fr;
    padding: 5px;
    font-size: 10pt;
`;

const ItemPickerTable = (props) => {
    return (
        <Wrapper>
            <HeaderWrapper>
                <p>Name</p>
                <p>Category</p>
                <p>New Count</p>
                <p>Rerurb Count</p>
            </HeaderWrapper>
            <ItemPickerTableRow 
             name="Landing Zone Dock"
             category="Dock"
            />
        </Wrapper>
    );
}

export default ItemPickerTable;