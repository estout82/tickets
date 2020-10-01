
import React from 'react';
import styled from 'styled-components';
import useLoading from '../../../common/hooks/useLoading';
import useOrder from '../../../../config/stores/order/useOrder';
import Pill from '../../../common/Pill';
import Select from '../../../common/Select';

const Wrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, .1);
    padding: 10px;
`;

const Header = styled.div`
    display: flex;
`;

const PillWrapper = styled.div`
    padding-right: 10px;
`;

const ItemList = styled.div`

`;

const Item = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
`;

const ItemField = styled.p`
    padding: 5px;
`;

const Controls = styled.div`

`;

export default function OrderCard({ orderId }) {
    const render = useLoading();
    const order = useOrder(orderId);

    const renderDoneState = () => {
        return (
            <Wrapper>
                <Header>
                    <PillWrapper>
                        <Pill>{ order.state.data.number }</Pill>
                    </PillWrapper>
                    <Pill>{ order.state.data.status }</Pill>
                </Header>
                <ItemList>
                    {
                        /* order.state.data.items.map(orderItem => {
                            return (
                                <Item key={ orderItem._id }>
                                    <ItemField>{ orderItem.item.name }</ItemField>
                                    <ItemField>{ orderItem.quantity }</ItemField>
                                </Item>
                            )
                        }) */
                    }
                </ItemList>
                <Controls>
                    <Select></Select>
                </Controls>
            </Wrapper>
        );
    }

    return render(renderDoneState, { status: order.status });
}