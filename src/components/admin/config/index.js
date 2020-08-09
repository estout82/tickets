
import React, { useState } from 'react';
import styled from 'styled-components';

import AzureIntegrationCard from './AzureIntegrationCard';

// TODO: make the grid responsive

const Content = styled.div`
    height: calc(100% - 40px);
    width: 100%;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(6, 200px);
    grid-auto-rows: 200px;
    grid-gap: 20px 20px;
    margin: 20px;
    color: ${ props => props.theme.textColorOne };
    overflow: scroll;
`;

const Config = (props) => {
    // eslint-disable-next-line
    const [cards, setCards] = useState([
        { pos: { row: 1, col: 1 }, size: { width: 2, height: 2 } },
        { pos: { row: 1, col: 3 }, size: { width: 2, height: 2 } },
        { pos: { row: 1, col: 5 }, size: { width: 2, height: 2 } }
    ]);

    return (
        <Content>
            <AzureIntegrationCard pos={{ row: 1, col: 1 }}/>
        </Content>
    );
}

export default Config;