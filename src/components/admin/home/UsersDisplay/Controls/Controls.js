
import React from 'react';
import styled from 'styled-components';
import Search from './Search';

const Wrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    color: ${ props => props.theme.textColorOne };
    padding: 5px 10px;
`;

const Header = styled.h3`
    font-weight: 300;
`;

const Row = styled.div`
    display: flex;
    flex-flow: row nowrap;
    padding: 5px;
    justify-content: flex-start;
    align-items: center;
`;

const Controls = (props) => {
    return (
        <Wrapper>
            <Row>
                <Header>All Users</Header>
            </Row>
            <Row>
                <Search />
            </Row>
        </Wrapper>
    );
}

export default Controls;