
import React from 'react';
import styled from 'styled-components';
import useLoading from '../../../../common/hooks/useLoading';
import Button from '../../../../common/Button';
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
    grid-template-columns: 2fr 1fr 1fr .5fr;
    border-bottom: 1px solid ${ props => props.theme.textColorThree };
    margin-bottom: 5px;
`;

const Footer = styled.div`

`;

const Order = ({ orderId }) => {
    const render = useLoading();
    const orderData = useOrder(orderId);
    const updateOrder = useUpdateOrder();

    const handleStatusChange = (newValue) => {
        updateOrder.do(orderId, { status: newValue });
    }

    const renderDoneState = () => {
        return (
            <Wrapper>
                <Header>Order #{ orderData.data.number }</Header>
                <Controls
                 msg={updateOrder.msg}
                 data={orderData}
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
                                />
                            );
                        }) :
                        'No Items'
                    }
                </ItemList>
                <Footer>
                    <Button>Save</Button>
                    <Button>Cancel</Button>
                </Footer>
            </Wrapper>
        );
    }

    return render(renderDoneState, { status: orderData.status });
}

export default Order;