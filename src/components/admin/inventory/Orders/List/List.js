
import React from 'react';
import styled from 'styled-components';
import ListBody from './ListBody';
import Filter from './Filter';
import Pagenation from '../../../../common/Pagenation';
import useOrderPage from '../../../../../config/stores/order/useOrderPage';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 50px 100px 1fr 50px;
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

const List = (props) => {
    const pageData = useOrderPage(1);

    return (
        <Wrapper>
            <Header>
                <h3>Orders</h3>
            </Header>
            <Filter />
            <ListBody data={ [1, 2, 3, 4, 5] }/>
            <PagenationWrapper>
                <Pagenation />
            </PagenationWrapper>
        </Wrapper>
    );
}

export default List;