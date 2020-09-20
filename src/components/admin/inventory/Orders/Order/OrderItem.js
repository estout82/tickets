
import React from 'react';
import styled from 'styled-components';
import Checkbox from '../../../../common/Checkbox';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    font-size: 12pt;

    & > div {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
`;

const OrderItem = ({ data }) => {
    return (
        <Wrapper>
            <div>{ data.item.name }</div>
            <div>
                <Checkbox value={ data.approved }/>
            </div>
            <div>
                <Checkbox value={ data.ordered }/>
            </div>
            <div>{ data.quantity }</div>
            <div>{ data.source }</div>
            <div>x</div>
        </Wrapper>
    );
}

export default OrderItem;