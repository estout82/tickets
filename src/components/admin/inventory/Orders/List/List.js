
import React from 'react';
import styled from 'styled-components';
import ListBody from './ListBody';
import Controls from './Controls';
import Pagenation from '../../../../common/Pagenation';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 50px auto 1fr 50px;
    padding: 10px;
`;

const Header = styled.div`
    h3 {
        font-weight: 300;
    }
`;

const PagenationWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
`;

const List = ({ metadata, onRowClick }) => {
    return (
        <Wrapper>
            <Header>
                <h3>Orders</h3>
            </Header>
            <Controls />
            <ListBody
             metadata={ metadata } 
             onRowClick={ onRowClick }
            />
            <PagenationWrapper>
                <Pagenation />
            </PagenationWrapper>
        </Wrapper>
    );
}

export default List;