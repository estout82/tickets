
import React from 'react';
import styled from 'styled-components';
import Controls from './Controls/Controls';
import List from './List/List';

const Wrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
    height: 100%;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, .1);
    border-radius: 5px;
`;

const UsersDisplay = (props) => {
    return (
        <Wrapper>
            <Controls />
            <List />
        </Wrapper>
    );
}

export default UsersDisplay;