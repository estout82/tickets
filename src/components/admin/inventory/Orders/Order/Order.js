
import React from 'react';
import styled from 'styled-components';
import useLoading from '../../../../common/hooks/useLoading';
import useOrder from '../../../../../config/stores/order/useOrder';
import OrderItem from './OrderItem';
import Controls from './Controls';
import useUpdateOrder from '../../../../../config/stores/order/useUpdateOrder';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 40px auto 1fr 50px;
    padding: 10px;
`;

const Header = styled.div`
    h3 {
        font-weight: 300;
    }
`;

const ItemList = styled.div`
    font-size: 12pt;
`;

const ItemListHeader = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr 1fr .75fr;
    border-bottom: 1px solid ${ props => props.theme.textColorThree };
    margin-bottom: 5px;
`;

const Footer = styled.div`

`;

const Order = ({ orderId }) => {
    const render = useLoading();
    const [orderData, editOrderData] = useOrder(orderId);
    const updateOrder = useUpdateOrder();

    const handleStatusChange = (newValue) => {
        updateOrder.do(orderId, { status: newValue });
    }

    const handleOrderItemDelete = (orderId, itemIndex) => {
        let requestData = { items: {} };
        requestData.items[itemIndex] = {};

        updateOrder.do(orderId, requestData);

        // remove from orderData
        // TODO: this is bad!
        let newOrderData = {...orderData};
        newOrderData.data.items = [
            ...newOrderData.data.items.splice(0, itemIndex),
            ...newOrderData.data.items.splice(itemIndex + 1)
        ];

        editOrderData(newOrderData);
    }

    const renderDoneState = () => {
        return (
            <Wrapper>
                <Header>Order #{ orderData.data.number }</Header>
                <Controls
                 msg={updateOrder.msg}
                 data={orderData.data}
                 onStatusChange={ handleStatusChange }
                />
                <ItemList>
                    <ItemListHeader>
                        <p>Name</p>
                        <p>Quantity</p>
                        <p>Source</p>
                    </ItemListHeader>
                    {
                        orderData.data.items &&
                        orderData.data.items.length > 0 ?
                        orderData.data.items.map((item, index) => {
                            return (
                                <OrderItem 
                                 key={ `${index}${item._id}` }
                                 data={ item }
                                 orderId={ orderId }
                                 itemIndex={ index }
                                 onItemDelete={ handleOrderItemDelete }
                                />
                            );
                        }) :
                        'No Items'
                    }
                </ItemList>
                <Footer>
                </Footer>
            </Wrapper>
        );
    }

    return render(renderDoneState, { status: orderData.status });
}

export default Order;