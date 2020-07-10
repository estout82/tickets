
import React from 'react';
import styled from 'styled-components';

import ItemList from './ItemList';
import ItemDetails from './ItemDetails';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-gap: 20px;
`;

const Items = (props) => {
    return (
        <Wrapper>
            <ItemList />
            <ItemDetails />
        </Wrapper>
    );
}

export default Items;